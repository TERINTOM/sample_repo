// interface Section {
//     id: number;
//     title: string;
//     showInputEle: boolean;
//   }
  
const Test = () => {
//     const [sections, setSections] = useState<Section[]>([{ id: 1, title: "Title", showInputEle: false }]);

// const handleDoubleClick = (sectionId: number) => {
//   setSections((prevSections) => {
//     return prevSections.map((section) =>
//       section.id === sectionId ? { ...section, showInputEle: true } : section
//     );
//   });
// };

// const handleAddSection = () => {
//   const newSection: Section = {
//     id: Date.now(),
//     title: "New Section",
//     showInputEle: false,
//   };
//   setSections((prevSections) => [...prevSections, newSection]);
// };

// const handleChange = (sectionId: number, e: React.ChangeEvent<HTMLInputElement>) => {
//   setSections((prevSections) => {
//     return prevSections.map((section) =>
//       section.id === sectionId ? { ...section, title: e.target.value } : section
//     );
//   });
// };

// const handleBlur = (sectionId: number) => {
//   setSections((prevSections) => {
//     return prevSections.map((section) =>
//       section.id === sectionId ? { ...section, showInputEle: false } : section
//     );
//   });
// };
    return ( 
        <>
        {/* {sections.map((section) => (
        <Box key={section.id} display="flex" flexDirection="column" mt="50px">
          <Box display="flex" alignItems="center" mt="10px">
            <img alt="drop" src={droplogo} style={{ marginRight: '10px' }} />
            {section.showInputEle ? (
              <input
                type="text"
                value={section.title}
                onChange={(e) => handleChange(section.id, e)}
                onBlur={() => handleBlur(section.id)}
                autoFocus
              />
            ) : (
              <>
                <Typography
                  variant="h2"
                  sx={{ fontSize: '25px' }}
                  onDoubleClick={() => handleDoubleClick(section.id)}
                >
                  {section.title}
                </Typography>
                <a onDoubleClick={() => handleDoubleClick(section.id)}>
                  <img alt="edit-sign" src={editlogo} style={{ marginLeft: '11px', marginTop: '5px' }} />
                </a>
              </>
            )}
          </Box>
          <Typography color={'#545F70'} variant="h4" mt={'5px'}>
            Type description here
          </Typography>
        </Box>
      ))}

      <Button onClick={handleAddSection}>+ Add section</Button>
       */}

        </>
     );
}
 
export default Test;