import React from 'react';
import Form from "@rjsf/material-ui";
import fs from 'fs';
import recipeSchema from "./recipeSchema.json";
import uiSchema from "./uiSchema.json";

const App = () => {
  const [formData, setFormData] = React.useState({"recipe_id": "$" + Math.random().toString(16).substr(2, 15)});

  const updateFormData = (newData) => {
      const prefilledData = JSON.parse(JSON.stringify(newData));
      if('states' in newData){
        if(!('states' in formData) || newData.states.length > formData.states.length){
            let newStateId = "$" + Math.random().toString(16).substr(2, 8);
            prefilledData.states[prefilledData.states.length - 1].state_id = newStateId
        
            /*recipeSchema.$defs.exitTrigger.properties.exitTo.enum.push(newStateId);*/
        }
        if(!('states' in formData) || newData.states.length != formData.states.length){
            var allStates = prefilledData.states.map((state) => state.state_id)
            recipeSchema.$defs.exitTrigger.properties.exitTo.enum = allStates
            console.log(allStates);
        }
      }
      setFormData(prefilledData);
  }

  const saveJSON = (formData) => {
    const fileData = JSON.stringify(formData);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'BioreactorRecipe' + formData.recipe_id + '.json';
    link.href = url;
    link.click();
  }
  
  return (
    <div class="d-flex justify-content-around mt-3">
        <div class="canvas-container align-self-start text-center mx-3">
            <div class="position-relative">
                <div class="overflow-auto">
                    <Form
                        schema={recipeSchema}
                        uiSchema={uiSchema}
                        formData={formData}
                        onChange={e => updateFormData(e.formData)}
                        onSubmit={e => saveJSON(e.formData)}
                    />
                </div>
            </div>
        </div>
    </div>
    );
};


export default App;