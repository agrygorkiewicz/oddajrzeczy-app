import React, {useState, useEffect} from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';



export const Names = ({ formData, setForm, navigation }) => {
    const { firstName, lastName, nickName } = formData;


    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };



    const [radio, setRadio] = useState(null);

    useEffect(()=>{
        const saveRadio = localStorage.getItem("myRadio");
        if (saveRadio) {
            setRadio(JSON.parse(saveRadio))
        }


    },[])

    useEffect(() => {
        localStorage.setItem("myRadio", JSON.stringify(radio));
    }, [radio]);





    return (
        <Container maxWidth="xs">
            <h3>Names</h3>
            <TextField
                label="First Name"
                name="firstName"
                value={firstName}
                onChange={setForm}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
            />
            <TextField
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={setForm}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
            />
            <TextField
                label="Nick Name"
                name="nickName"
                value={nickName}
                onChange={setForm}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                fullWidth
            />

            <FormGroup row>
                <FormControlLabel
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Secondary"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Primary"
                />
</FormGroup>
            <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                   checked={radio === "ubrania-no"}
                   value="ubrania-no"

                   onChange={(e) => {
                       setRadio(e.target.value)
                   }}
            />
            <label className="oddaj-form-one-checkbox-label">

                <input className="oddaj-form-one-checkbox-input-hide" type="radio"
                       checked={radio === "ubrania-no"}
                       value="ubrania-no"

                       onChange={(e) => {
                           setRadio(e.target.value)
                       }}
                />
                <span className="oddaj-form-one-checkbox-input"> </span>
                <p>ubrania, do wyrzucenia</p>
            </label>
            <Button
                variant="contained"
                fullWidth
                color="primary"
                style={{ marginTop: "1rem" }}
                onClick={() => navigation.next()}
            >
                Next
            </Button>
        </Container>
    );
};