export const UPDATED_FORM ="UPDATE_FORM";

export const onInputChange=(name,value,dispatch,formState)=>{
    dispatch({
        type:UPDATED_FORM,
        data:{
            name,
            value,
            hasError:false,
            error:"",
            touched:false,
            isFormValid:false,
        },
    });
};