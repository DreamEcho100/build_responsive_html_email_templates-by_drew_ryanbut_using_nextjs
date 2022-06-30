// https://nodejs.dev/learn/writing-files-with-nodejs
// https://regexr.com/

import * as fs from 'fs';
import * as path from 'path';
import cheerio from 'cheerio';
import { isText } from 'domhandler';

export const cleanOutFromScriptsTags = async () => {
	try {
		const targetPath = path.join(__dirname, '../out/index.html');
		await fs.readFile(targetPath, { encoding: 'utf8' }, (err, data) => {
			if (err) throw err.message;

			const comments: string[] = [];
			let toReplaceWithHtmlCommentOnBuildCounter = 0;

			(() => {
				const $ = cheerio.load(data);
				const elements = $('.to-replace-with-its-content-on-build');
				elements.each((index) => {
					if (isText(elements[index].children[0])) {
						comments.push((elements[index].children[0] as any).data);
					}
				});
			})();

			const styles: string[] = [];
			let modifiedData = data
				.replace(
					'<!DOCTYPE html>',
					'<!DOCTYPE htmlPUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
				)
				.replace('<html', '<html xmlns="http://www.w3.org/1999/xhtml" ')
				.replace(/<\s*script[^>]*>(.*?)<\s*\/\s*script>/g, '')
				.replace(
					// 	/<\s*style[^>]*>(.*?)<\s*\/\s*style>/g,
					/<\s*script[^>]*>(.*?<\s*\/\s*script>|<!--[^]*--><\s*\/\s*script>)/gs,
					(match, offset, string) => {
						if (/to-replace-with-its-content-on-build/.test(match)) {
							toReplaceWithHtmlCommentOnBuildCounter++;
							return comments[toReplaceWithHtmlCommentOnBuildCounter - 1];
						}

						return '';
					}
				);

			const nextDivTagStartsIndex = modifiedData.search('<div id="__next">');

			modifiedData =
				modifiedData.slice(0, nextDivTagStartsIndex) +
				modifiedData.slice(nextDivTagStartsIndex + 17);

			const headTagEndsIndex = modifiedData.search('</head>');

			modifiedData =
				modifiedData.slice(0, headTagEndsIndex) +
				styles.join('') +
				modifiedData.slice(headTagEndsIndex);
			const modifiedDataArr = modifiedData.split(' ');

			let i = modifiedDataArr.length - 1;
			for (; i >= 0; i--) {
				if (modifiedDataArr[i].includes('</div>')) {
					modifiedDataArr[i] = modifiedDataArr[i].replace('</div>', '');
					break;
				}
			}

			modifiedData = modifiedDataArr.join(' ');

			fs.writeFileSync(targetPath, modifiedData);
		});
	} catch (err) {
		err instanceof Error && console.error(err.message);
	}
};

cleanOutFromScriptsTags();
