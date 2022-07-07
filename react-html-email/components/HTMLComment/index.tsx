// ToReplaceWithItsContentOnBuild

import { FC } from 'react';

type TProps = {
	statement: string;
	removeExtraSpaces?: boolean;
};
// | {
// 		children: React.ReactNode;
// 		commentBefore?:
// 			| string
// 			| {
// 					comment: string;
// 					removeExtraSpaces?: boolean;
// 			  };
// 		commentAfter?:
// 			| string
// 			| {
// 					comment: string;
// 					removeExtraSpaces?: boolean;
// 			  };
// 		hmmm?: boolean;
//   };

const HTMLComment: FC<TProps> = (props) => {
	// if (
	// 	'children' in props ||
	// 	'commentBefore' in props ||
	// 	'commentAfter' in props
	// ) {
	// 	if (props.hmmm) {
	// 		console.dir(props.children);
	// 	}

	// 	return (
	// 		<>
	// 			{props.commentBefore && (
	// 				<script
	// 					className='to-replace-with-its-content-on-build'
	// 					dangerouslySetInnerHTML={{
	// 						__html:
	// 							'<!--' +
	// 							(typeof props.commentBefore === 'string'
	// 								? props.commentBefore
	// 								: props.commentBefore.removeExtraSpaces
	// 								? props.commentBefore.comment.trim().replace(/\s+/, ' ')
	// 								: props.commentBefore.comment) +
	// 							'-->',
	// 					}}
	// 				/>
	// 			)}
	// 			{props.children}
	// 			{props.commentAfter && (
	// 				<script
	// 					className='to-replace-with-its-content-on-build'
	// 					dangerouslySetInnerHTML={{
	// 						__html:
	// 							'<!--' +
	// 							(typeof props.commentAfter === 'string'
	// 								? props.commentAfter
	// 								: props.commentAfter.removeExtraSpaces
	// 								? props.commentAfter.comment.trim().replace(/\s+/, ' ')
	// 								: props.commentAfter.comment) +
	// 							'-->',
	// 					}}
	// 				/>
	// 			)}
	// 		</>
	// 	);
	// }

	return (
		<script
			className='to-replace-with-its-content-on-build'
			dangerouslySetInnerHTML={{
				__html: '<!--' + props.statement + '-->',
			}}
		/>
	);
};

export default HTMLComment;
