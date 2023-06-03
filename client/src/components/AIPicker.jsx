import CustomButtom from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Describe Your Logo"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButtom
            type={"outline"}
            title="Generating Your Shirt..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButtom 
            type={"outline"}
            title="As Logo"
            handleClick={()=>{handleSubmit('logo')}}
            customStyles="text-xs"
            />
            <CustomButtom 
            type={"filled"}
            title="As Texture"
            handleClick={()=>{handleSubmit('full')}}
            customStyles="text-xs"
            />

          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
