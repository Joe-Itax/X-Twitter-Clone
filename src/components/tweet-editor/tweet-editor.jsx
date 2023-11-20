import Avatar from './avatar';
import TweetEditorForm from './tweet-editor-form';

function TweetEditor() {
  return (
    <div className="tweet-editor">
      <Avatar />
      <TweetEditorForm />
    </div>
  );
}

export default TweetEditor;
