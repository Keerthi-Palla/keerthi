import React from "react";


class Regform extends React.Component{
    render(){
        return(
            <fieldset>
                <h1 class="con">Registration Form</h1>
      <hr/>
      <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
          <span class="input-group-text" id="inputGroup-sizing-default">First Name</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
          <br/>
          <div class="input-group mb-4">
            <span class="input-group-text" id="inputGroup-sizing-default">Last Name</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <br/>
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="text" class="form-control-plaintext" id="staticEmail"/>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword"/>
            </div>
          </div>
          <br/>
          <div class="input-group mb-4">
            <span class="input-group-text" id="inputGroup-sizing-default">contact</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <br/>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Address</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <br/>
          <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Pincode</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <br/>Gender:
          <div>
            <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline mb-0 me-4">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline mb-0">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>
            </div>
         </div>
         <br/>
          <div>
            <select class="form-select form-select-sm" aria-label="Small select example">
                <option selected>select branch</option>
                <option value="1">CSE</option>
                <option value="2">ECE</option>
                <option value="3">EEE</option>
                <option value="3">MECH</option>
                <option value="3">civil</option>
            </select>
          </div>
          <br/>
          <select data-mdb-select-init>
            <option value="1">State</option>
            <option value="2">AndhraPradesh</option>
            <option value="3">Telangana</option>
            <option value="4">Tamilnadu</option>
          </select>
        <br/><br/>
        <div class="col-md-6 mb-4">
          <select data-mdb-select-init>
            <option value="1">City</option>
            <option value="2">Option 1</option>
            <option value="3">Option 2</option>
            <option value="4">Option 3</option>
          </select>
      </div>
      <br/>
      <div data-mdb-input-init class="form-outline mb-4">
        <label class="form-label" for="form3Example9">DOB</label>
        <input type="date" id="form3Example9" class="form-control form-control-lg" />
      </div>
      <br/>
      <div class="mb-3">
        <label for="formFile" class="form-label">upload your resume:</label>
        <input class="form-control" type="file" id="formFile"/>
      </div>
      <br/><br/>
         <div class="center">
          <button type="submit" class="btn btn-primary btn-lg">submit</button>
         </div>              
            </fieldset>
        );
    }
}
export default Regform;