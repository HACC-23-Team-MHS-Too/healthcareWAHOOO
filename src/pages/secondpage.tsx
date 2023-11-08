import Head from "next/head";

export default function SecondPage() {

return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      
      <div>
        <h1 className="text-2xl">Select your preferences below:</h1>
          <section>
            <h3 className="text-xl">Services:</h3>
            <form>
              <input type="checkbox" id="tagButton"/>Medical<br/>
              <input type="checkbox" id="tagButton"/>Urgent Care<br/>
              <input type="checkbox" id="tagButton"/>Dental<br/>
              <input type="checkbox" id="tagButton"/>Hearing<br/>
              <input type="checkbox" id="tagButton"/>Vision<br/>
              <input type="checkbox" id="tagButton"/>Podiatry<br/>
              <input type="checkbox" id="tagButton"/>Pharmacy<br/>
              <input type="checkbox" id="tagButton"/>Non-Profit Pharmacy<br/>
              <input type="checkbox" id="tagButton"/>Free Prescription Medication<br/>
              <input type="checkbox" id="tagButton"/>Internal Medicine<br/>
              <input type="checkbox" id="tagButton"/>Telemedicine<br/>
              <input type="checkbox" id="tagButton"/>Health Education/Nutrition<br/>
              <input type="checkbox" id="tagButton"/>Immunizations<br/>
              <input type="checkbox" id="tagButton"/>Covid-19 Vaccination<br/>
              <input type="checkbox" id="tagButton"/>Primary Care<br/>
              <input type="checkbox" id="tagButton"/>Geriatric<br/>
              <input type="checkbox" id="tagButton"/>Adults<br/>
              <input type="checkbox" id="tagButton"/>Pediatric<br/>
              <input type="checkbox" id="tagButton"/>Family Planning<br/>
              <input type="checkbox" id="tagButton"/>Family Medicine<br/>
              <input type="checkbox" id="tagButton"/>WIC<br/>
              <input type="checkbox" id="tagButton"/>Pregnancy<br/>
              <input type="checkbox" id="tagButton"/>OB/GYN<br/>
              <input type="checkbox" id="tagButton"/>Women's Health<br/>
              <input type="checkbox" id="tagButton"/>Men's Health<br/>
              <input type="checkbox" id="tagButton"/>LGBTQ Community-Healthcare<br/>
              <input type="checkbox" id="tagButton"/>Social Services<br/>
              <input type="checkbox" id="tagButton"/>Counseling/Mental Heatlh<br/>
              <input type="checkbox" id="tagButton"/>Substance Abuse/Addiction<br/>
              <input type="checkbox" id="tagButton"/>Specialists<br/>
              <input type="checkbox" id="tagButton"/>Lab<br/>
              <input type="checkbox" id="tagButton"/>Mammograms<br/>
              <input type="checkbox" id="tagButton"/>X-Ray<br/>
              <input type="checkbox" id="tagButton"/>Diabetes-Prevention/Testing<br/>
              <input type="checkbox" id="tagButton"/>Diabetes-Treatment/Management<br/>
              <input type="checkbox" id="tagButton"/>Diabetes Screening<br/>
              <input type="checkbox" id="tagButton"/>Colorectal Cancer Screening<br/>
              <input type="checkbox" id="tagButton"/>Prostate Cancer Screening<br/>
              <input type="checkbox" id="tagButton"/>Lung Cancer Screening<br/>
              <input type="checkbox" id="tagButton"/>Blood Pressure Screening<br/>
              <input type="checkbox" id="tagButton"/>Chronic Obstructive Pulmonary Disease (COPD) Screening<br/>
              <input type="checkbox" id="tagButton"/>Cholesterol Screening/Lipid Panel Test<br/>
              <input type="checkbox" id="tagButton"/>Hepatitis C Testing<br/>
              <input type="checkbox" id="tagButton"/>Sexually Transmitted Disease (STD) Testing<br/>
              <input type="checkbox" id="tagButton"/>HIV/AIDS Testing<br/>
              <input type="checkbox" id="tagButton"/>Sexually Transmitted Disease (STD) Treatment<br/>
              <input type="checkbox" id="tagButton"/>HIV/AIDS/STD Counciling<br/>
              <input type="checkbox" id="tagButton"/>ApplicationAssistance - Rx<br/>
              <input type="checkbox" id="tagButton"/>Contact Clinic for Details<br/>
              <input type="checkbox" id="tagButton"/>Walk-ins accepted<br/>
              <input type="checkbox" id="tagButton"/>Transportation<br/>
              <input type="checkbox" id="tagButton"/>Community Health Workers Services<br/>
              <input type="checkbox" id="tagButton"/>Uninsured - cost based income<br/>
            </form>
          </section>
        
        <br/>
        <section/>
          <h3>Location:</h3>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Map_of_Oahu.png" alt="placeholdermap" useMap="placeholdermap"></img>
          <map name="placeholdermap">
            <area shape="rect"coords="34, 44, 270,350" href="placeholder.htm"></area>
          </map> 
        <br/>
          <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Submit</button>
          
        </div>


      </>
      );
}