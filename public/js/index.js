document.querySelector('.createPost').addEventListener('submit', createPost);
document.querySelector('.updatePost').addEventListener('submit', updatePost);
document.querySelector('.delete-post').addEventListener('click', removePost);
let postid = document.querySelector()

let createPost = async function (e) {
  e.preventDefault();
	let postinfo = document.querySelector('.post-info').value;
  let postTitle = document.querySelector('.post-title').value;
  let postText = document.querySelector('.post-text').value;
	await fetch('/api/posts', {
		method: 'POST',
		body: JSON.stringify({postTitle, postText}),
		headers: {'Content-Type': 'application/json'},
	});
	if (response.ok) {
	document.replace('/controlpanel');
	} else {console.log('Fail to create post.');
}};

let updatePost = async function (e) {
	e.preventDefault();
	let postinfo = document.querySelector('.post-info').value;
	let postTitle = document.querySelector('.post-title').value;
	let postText = document.querySelector('.post-text').value;
	await fetch(`/api/posts/${postId}`, {
		method: 'PUT',
		body: JSON.stringify({postTitle, postText}),
		headers: { 'Content-Type': 'application/json'},
	});
	if (response.ok) {
		document.replace('/controlpanel');
		} else {console.log('Fail to create post.');
}};

let removePost = async function (e) {
	await fetch (`/api/posts/${postId}`, { method: 'DELTE' });
	if (response.ok) {
		document.replace('/controlpanel');
		} else {console.log('Fail to create post.');
}};