import React, { useState } from 'react';
import './signup_card2.css';

export default function SignupCard2() {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [sector, setSector] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+33');
  const [error, setError] = useState({ username: '', firstName: '', lastName: '', phoneNumber: '', birthDate: '' });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    // Only allow alphanumeric characters
    if (/^[a-zA-Z0-9]*$/.test(value) || value === '') {
      setUsername(value);
      setError((prev) => ({
        ...prev,
        username: value.length < 3 || value.length > 20 ? 'Username must be between 3 and 20 characters and contain only letters and numbers.' : ''
      }));
    }
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    // Only allow letters and hyphens
    if (/^[a-zA-Z-]*$/.test(value) || value === '') {
      setFirstName(value);
      setError((prev) => ({
        ...prev,
        firstName: value.trim() === '' ? 'Please enter a valid first name (letters and hyphens only).' : ''
      }));
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    // Only allow letters and hyphens
    if (/^[a-zA-Z-]*$/.test(value) || value === '') {
      setLastName(value);
      setError((prev) => ({
        ...prev,
        lastName: value.trim() === '' ? 'Please enter a valid last name (letters and hyphens only).' : ''
      }));
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= 150) {
      setDescription(value);
    }
  };

  const handleSectorChange = (e) => {
    setSector(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleBirthDateChange = (e) => {
    const value = e.target.value;
    setBirthDate(value);

    const today = new Date();
    const birthDate = new Date(value);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    let adjustedAge = age;
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      adjustedAge--;
    }

    setError((prev) => ({
      ...prev,
      birthDate: adjustedAge < 18 ? 'You must be at least 18 years old to create an account.' : ''
    }));
  };

  const handleBirthPlaceChange = (e) => {
    setBirthPlace(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Only allow digits
    if (/^\d*$/.test(value) || value === '') {
      setPhoneNumber(value);
      setError((prev) => ({
        ...prev,
        phoneNumber: value.match(/^\d+$/) ? '' : 'Please enter a valid phone number (digits only).'
      }));
    }
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const isFormValid = () => {
    return (
      profilePhoto &&
      username &&
      !error.username &&
      firstName &&
      !error.firstName &&
      lastName &&
      !error.lastName &&
      description &&
      sector &&
      gender &&
      birthDate &&
      !error.birthDate &&
      birthPlace &&
      phoneNumber &&
      !error.phoneNumber &&
      termsAccepted
    );
  };

  const isFormComplete = () => {
    return (
      profilePhoto !== null &&
      username.trim() !== '' &&
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      description.trim() !== '' &&
      sector !== '' &&
      gender !== '' &&
      birthDate !== '' &&
      birthPlace !== '' &&
      phoneNumber.trim() !== '' &&
      termsAccepted
    );
  };

  return (
    <div className="signup-card2">
      <h2>Individual Registration Form</h2>
      <div className="photo-upload-container">
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          style={{ display: 'none' }}
          id="photo-upload"
        />
        <label htmlFor="photo-upload" className="photo-upload-label">
          {profilePhoto ? (
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
          ) : (
            <div className="upload-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
            </div>
          )}
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          className="form-input"
          placeholder="Enter your first name (letters and hyphens only)"
        />
        {error.firstName && <small className="error">{error.firstName}</small>}
      </div>
      <div className="form-group">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          className="form-input"
          placeholder="Enter your last name (letters and hyphens only)"
        />
        {error.lastName && <small className="error">{error.lastName}</small>}
      </div>
      <div className="form-group">
        <label className="form-label">Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          className="form-input"
          placeholder="Enter your username (letters and numbers only)"
        />
        {error.username && <small className="error">{error.username}</small>}
      </div>
      <div className="form-group">
        <label className="form-label">Short Description</label>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className="form-input"
          placeholder="Describe yourself briefly (150 characters max)."
          rows="3"
        />
        <small>{description.length}/150 characters</small>
      </div>
      <div className="form-group">
        <label className="form-label">Sector</label>
        <select value={sector} onChange={handleSectorChange} className="form-input">
          <option value="">Select your sector</option>
          <option value="Technology">Technology</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
          <option value="Education">Education</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Gender</label>
        <select value={gender} onChange={handleGenderChange} className="form-input">
          <option value="">Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Birth Date</label>
        <input
          type="date"
          value={birthDate}
          onChange={handleBirthDateChange}
          className="form-input"
        />
        {error.birthDate && <small className="error">{error.birthDate}</small>}
      </div>
      <div className="form-group">
        <label className="form-label">Birth Place</label>
        <select value={birthPlace} onChange={handleBirthPlaceChange} className="form-input">
          <option value="">Select your birth place</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Brazil">Brazil</option>
          <option value="Brunei">Brunei</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Cabo Verde">Cabo Verde</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Central African Republic">Central African Republic</option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
          <option value="Congo, Republic of the">Congo, Republic of the</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Equatorial Guinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Eswatini">Eswatini</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="Gabon">Gabon</option>
          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Greece">Greece</option>
          <option value="Grenada">Grenada</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guinea">Guinea</option>
          <option value="Guinea-Bissau">Guinea-Bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Honduras">Honduras</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran">Iran</option>
          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jordan">Jordan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Korea, North">Korea, North</option>
          <option value="Korea, South">Korea, South</option>
          <option value="Kosovo">Kosovo</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Laos">Laos</option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Liberia">Liberia</option>
          <option value="Libya">Libya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Marshall Islands">Marshall Islands</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mexico">Mexico</option>
          <option value="Micronesia">Micronesia</option>
          <option value="Moldova">Moldova</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="North Macedonia">North Macedonia</option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Palestine">Palestine</option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Qatar">Qatar</option>
          <option value="Romania">Romania</option>
          <option value="Russia">Russia</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
          <option value="Saint Lucia">Saint Lucia</option>
          <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
          <option value="Samoa">Samoa</option>
          <option value="San Marino">San Marino</option>
          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Sierra Leone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Solomon Islands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="South Africa">South Africa</option>
          <option value="South Sudan">South Sudan</option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syria">Syria</option>
          <option value="Taiwan">Taiwan</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Thailand">Thailand</option>
          <option value="Timor-Leste">Timor-Leste</option>
          <option value="Togo">Togo</option>
          <option value="Tonga">Tonga</option>
          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Vatican City">Vatican City</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Vietnam">Vietnam</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <div className="phone-input">
          <select 
            value={countryCode}
            onChange={handleCountryCodeChange}
            className="country-code"
          >
            <option value="+93">+93</option>
            <option value="+355">+355</option>
            <option value="+213">+213</option>
            <option value="+376">+376</option>
            <option value="+244">+244</option>
            <option value="+54">+54</option>
            <option value="+374">+374</option>
            <option value="+61">+61</option>
            <option value="+43">+43</option>
            <option value="+994">+994</option>
            <option value="+973">+973</option>
            <option value="+880">+880</option>
            <option value="+375">+375</option>
            <option value="+32">+32</option>
            <option value="+501">+501</option>
            <option value="+229">+229</option>
            <option value="+975">+975</option>
            <option value="+591">+591</option>
            <option value="+387">+387</option>
            <option value="+267">+267</option>
            <option value="+55">+55</option>
            <option value="+359">+359</option>
            <option value="+226">+226</option>
            <option value="+257">+257</option>
            <option value="+855">+855</option>
            <option value="+237">+237</option>
            <option value="+1">+1</option>
            <option value="+236">+236</option>
            <option value="+235">+235</option>
            <option value="+56">+56</option>
            <option value="+86">+86</option>
            <option value="+57">+57</option>
            <option value="+269">+269</option>
            <option value="+242">+242</option>
            <option value="+506">+506</option>
            <option value="+385">+385</option>
            <option value="+53">+53</option>
            <option value="+357">+357</option>
            <option value="+420">+420</option>
            <option value="+45">+45</option>
            <option value="+253">+253</option>
            <option value="+593">+593</option>
            <option value="+20">+20</option>
            <option value="+503">+503</option>
            <option value="+240">+240</option>
            <option value="+372">+372</option>
            <option value="+251">+251</option>
            <option value="+679">+679</option>
            <option value="+358">+358</option>
            <option value="+33">+33</option>
            <option value="+241">+241</option>
            <option value="+220">+220</option>
            <option value="+995">+995</option>
            <option value="+49">+49</option>
            <option value="+233">+233</option>
            <option value="+30">+30</option>
            <option value="+502">+502</option>
            <option value="+224">+224</option>
            <option value="+245">+245</option>
            <option value="+592">+592</option>
            <option value="+509">+509</option>
            <option value="+504">+504</option>
            <option value="+36">+36</option>
            <option value="+354">+354</option>
            <option value="+91">+91</option>
            <option value="+62">+62</option>
            <option value="+98">+98</option>
            <option value="+964">+964</option>
            <option value="+353">+353</option>
            <option value="+972">+972</option>
            <option value="+39">+39</option>
            <option value="+81">+81</option>
            <option value="+962">+962</option>
            <option value="+7">+7</option>
            <option value="+254">+254</option>
            <option value="+965">+965</option>
            <option value="+856">+856</option>
            <option value="+371">+371</option>
            <option value="+961">+961</option>
            <option value="+231">+231</option>
            <option value="+218">+218</option>
            <option value="+423">+423</option>
            <option value="+370">+370</option>
            <option value="+352">+352</option>
            <option value="+261">+261</option>
            <option value="+265">+265</option>
            <option value="+60">+60</option>
            <option value="+960">+960</option>
            <option value="+223">+223</option>
            <option value="+356">+356</option>
            <option value="+222">+222</option>
            <option value="+230">+230</option>
            <option value="+52">+52</option>
            <option value="+377">+377</option>
            <option value="+976">+976</option>
            <option value="+212">+212</option>
            <option value="+258">+258</option>
            <option value="+95">+95</option>
            <option value="+264">+264</option>
            <option value="+977">+977</option>
            <option value="+31">+31</option>
            <option value="+64">+64</option>
            <option value="+505">+505</option>
            <option value="+227">+227</option>
            <option value="+234">+234</option>
            <option value="+850">+850</option>
            <option value="+47">+47</option>
            <option value="+968">+968</option>
            <option value="+92">+92</option>
            <option value="+507">+507</option>
            <option value="+675">+675</option>
            <option value="+595">+595</option>
            <option value="+51">+51</option>
            <option value="+63">+63</option>
            <option value="+48">+48</option>
            <option value="+351">+351</option>
            <option value="+974">+974</option>
            <option value="+40">+40</option>
            <option value="+7">+7</option>
            <option value="+250">+250</option>
            <option value="+966">+966</option>
            <option value="+221">+221</option>
            <option value="+381">+381</option>
            <option value="+248">+248</option>
            <option value="+232">+232</option>
            <option value="+65">+65</option>
            <option value="+421">+421</option>
            <option value="+386">+386</option>
            <option value="+677">+677</option>
            <option value="+252">+252</option>
            <option value="+27">+27</option>
            <option value="+82">+82</option>
            <option value="+34">+34</option>
            <option value="+94">+94</option>
            <option value="+249">+249</option>
            <option value="+597">+597</option>
            <option value="+46">+46</option>
            <option value="+41">+41</option>
            <option value="+963">+963</option>
            <option value="+886">+886</option>
            <option value="+992">+992</option>
            <option value="+255">+255</option>
            <option value="+66">+66</option>
            <option value="+228">+228</option>
            <option value="+216">+216</option>
            <option value="+90">+90</option>
            <option value="+993">+993</option>
            <option value="+256">+256</option>
            <option value="+380">+380</option>
            <option value="+971">+971</option>
            <option value="+44">+44</option>
            <option value="+598">+598</option>
            <option value="+998">+998</option>
            <option value="+678">+678</option>
            <option value="+379">+379</option>
            <option value="+58">+58</option>
            <option value="+84">+84</option>
            <option value="+967">+967</option>
            <option value="+260">+260</option>
            <option value="+263">+263</option>
          </select>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Phone Number (digits only)"
            className="phone-number"
          />
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <label htmlFor="terms">
            I accept the <a href="/terms">Terms of Use</a> and the <a href="/privacy">Privacy Policy</a>
          </label>
        </div>
        <div className="form-group">
          <button 
            type="submit"
            className="submit-btn"
            disabled={!isFormValid() || !isFormComplete()}
          >
            Validate
          </button>
        </div>
      </div>
    </div>
  );
}