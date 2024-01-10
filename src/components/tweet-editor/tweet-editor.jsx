import Avatar from './avatar';
import TweetEditorForm from './tweet-editor-form';

function TweetEditor() {
  return (
    <div className="tweet-editor flex items-start justify-start gap-[20px] border-b border-solid border-[#2f3336] py-[0.3rem] px-[1rem]">
      <Avatar />
      <TweetEditorForm />
    </div>
  );
}

export default TweetEditor;
