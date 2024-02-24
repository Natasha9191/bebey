"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[56588],{357527:function(e,o){o.Z=["AT","BE","BG","CH","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GR","HU","HR","IE","IT","LT","LU","LV","MT","NL","PL","PT","RO","SK","SI","SE"]},256588:function(e,o,a){a.d(o,{C0:function(){return n},ZP:function(){return c},a0:function(){return _}});var l=a(908390),t=a(357527),s=a(898781),r=a(767546),i=a(515198),n=["DMCA","Trademark","GDPR"],_={test:{LAW:"test",DECIDER_KEY:"legal_webapp_takedown_form_test",COUNTRY_CODES:["US"],API:"/v3/legal/takedowns/test/",COMPLAINTS_OFFICE:!0,RESTRICT_MULTIPLE_LAWS:!1,ALLOW_ANON_SUBMISSION:!1},netzdg:{LAW:"netzdg",DECIDER_KEY:"legal_webapp_takedown_form_netzdg",COUNTRY_CODES:["DE"],API:"/v3/legal/takedowns/netzdg/",COMPLAINTS_OFFICE:!0,RESTRICT_MULTIPLE_LAWS:!1,ALLOW_ANON_SUBMISSION:!1},turkey:{LAW:"turkey",DECIDER_KEY:"legal_webapp_takedown_form_turkey",COUNTRY_CODES:["TR"],API:"/v3/legal/takedowns/turkey/",COMPLAINTS_OFFICE:!1,RESTRICT_MULTIPLE_LAWS:!0,ALLOW_ANON_SUBMISSION:!1},koplg:{LAW:"koplg",DECIDER_KEY:"legal_webapp_takedown_form_koplg",COUNTRY_CODES:["AT"],API:"/v3/legal/takedowns/koplg/",COMPLAINTS_OFFICE:!0,RESTRICT_MULTIPLE_LAWS:!1,ALLOW_ANON_SUBMISSION:!1},loi_fr:{LAW:"loi_fr",DECIDER_KEY:"legal_webapp_takedown_form_fr",COUNTRY_CODES:["FR"],API:"/v3/legal/takedowns/fr_dsa/",COMPLAINTS_OFFICE:!1,RESTRICT_MULTIPLE_LAWS:!0,ALLOW_ANON_SUBMISSION:!1},dsa:{LAW:"dsa",DECIDER_KEY:"legal_webapp_takedown_form_dsa",EXPERIMENT_KEY:"legal_web_dsa_form",COUNTRY_CODES:t.Z.filter(function(e){return"GB"!==e&&"CH"!==e}),API:"/v3/legal/takedowns/dsa/",COMPLAINTS_OFFICE:!1,RESTRICT_MULTIPLE_LAWS:!0,ALLOW_ANON_SUBMISSION:!0}};function c(e,o){var a=(0,s.ZP)(),t={test:{header:"Test Header",subHeader:"Test SubHeader",laws:[{name:"Test Law A",label:"Test Law A"},{name:"Test Law B",label:"Test Law B"}]},netzdg:{header:a._('NetzDG Complaint Form', 'Takedown.NetzDG.FormTitle', 'The title of the form'),subHeader:a._('Use this form to identify content that violates German laws that are subject to the Netzwerkdurchsetzungsgesetz (NetzDG). Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.', 'Takedown.NetzDG.FormDescription', 'Provides a description of what the form is used for'),laws:[{name:"Dissemination of propaganda material of unconstitutional organizations (Section 86 StGB)",label:a._('Dissemination of propaganda material of unconstitutional organizations (Section 86 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Using symbols of unconstitutional organizations (Section 86a StGB)",label:a._('Using symbols of unconstitutional organizations (Section 86a StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Preparation of a serious violent offense endangering the state (Section 89a StGB)",label:a._('Preparation of a serious violent offense endangering the state (Section 89a StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Encouraging the commission of a serious violent offense endangering the state (Section 91 StGB)",label:a._('Encouraging the commission of a serious violent offense endangering the state (Section 91 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Treasonous forgery (Section 100a StGB)",label:a._('Treasonous forgery (Section 100a StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Public incitement to crime (Section 111 StGB)",label:a._('Public incitement to crime (Section 111 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Breach of the public peace by threatening to commit offenses (Section 126 StGB)",label:a._('Breach of the public peace by threatening to commit offenses (Section 126 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Forming criminal organizations (Section 129 StGB)",label:a._('Forming criminal organizations (Section 129 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Forming terrorist organizations (Section 129a StGB)",label:a._('Forming terrorist organizations (Section 129a StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Criminal and terrorist organizations abroad; extended confiscation and deprivation (Section 129b StGB)",label:a._('Criminal and terrorist organizations abroad; extended confiscation and deprivation (Section 129b StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Incitement to hatred (Section 130 StGB)",label:a._('Incitement to hatred (Section 130 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Dissemination of depictions of violence (Section 131 StGB)",label:a._('Dissemination of depictions of violence (Section 131 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Rewarding and approving of criminal offenses (Section 140 StGB)",label:a._('Rewarding and approving of criminal offenses (Section 140 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Insulting denominations, religious communities and ideological associations (Paragraph 166 StGB)",label:a._('Insulting denominations, religious communities and ideological associations (Paragraph 166 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Making available child pornography by broadcasting, media services, or telecommunication services (Section 184b/184d StGB)",label:a._('Making available child pornography by broadcasting, media services, or telecommunication services (Section 184b/184d StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Insult (Section 185 StGB)",label:a._('Insult (Section 185 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Defamation (Section 186 StGB)",label:a._('Defamation (Section 186 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Intentional Defamation (Section 187 StGB)",label:a._('Intentional Defamation (Section 187 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Denigration of the memory of the deceased (Paragraph 189 StGB)",label:a._('Denigration of the memory of the deceased (Paragraph 189 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Violation of intimate privacy by taking photographs (Section 201a StGB)",label:a._('Violation of intimate privacy by taking photographs (Section 201a StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Threatening the commission of a felony (Section 241 StGB)",label:a._('Threatening the commission of a felony (Section 241 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')},{name:"Forgery of data intended to provide proof (Section 269 StGB)",label:a._('Forgery of data intended to provide proof (Section 269 StGB)', 'Takedown.NetzDG.Law', 'These are German laws which a user can report a pin for takedown')}]},turkey:{header:(0,i.jsx)(l.xu,{"data-test-id":"turkish-law-complaint-header",children:a._('Turkish Internet Law Complaint Form', 'Takedown.Turkey.FormSubHeader', 'The title of the form')}),subHeader:a._('Use this form to identify content that violates Turkish laws that are subject to the Turkish Internet Law. Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.', 'Takedown.Turkey.FormSubheader', 'The sub-title of the form'),laws:[{label:a._('Personal rights violation', 'Takedown.Turkey.Law.Personal', 'These are laws which a user can report a pin for takedown'),name:"Personal rights violation"},{label:a._('Privacy rights violation', 'Takedown.Turkey.Law.Privacy', 'These are laws which a user can report a pin for takedown'),name:"Privacy rights violation"}]},koplg:{header:a._('Austria KoPl-G Form', 'AustriaKoPl-G.FormTitle', 'The title of the form'),subHeader:a._('Use this form to identify content that violates Austrian laws that are subject to the Kommunikationsplattformen-Gesetz (KoPl-G). Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.', 'AustriaKoPl-G.FormDescription', 'Provides a description of what the form is used for'),laws:[{label:"N\xf6tigung",name:"N\xf6tigung"},{label:"Gef\xe4hrliche Drohung",name:"Gef\xe4hrliche Drohung"},{label:"Beharrliche Verfolgung",name:"Beharrliche Verfolgung"},{label:"Fortdauernde Bel\xe4stigung im Wege einer Telekommunikation",name:"Fortdauernde Bel\xe4stigung im Wege einer Telekommunikation"},{label:"Vorwurf einer schon abgetanen gerichtlich strafbaren Handlung",name:"Vorwurf einer schon abgetanen gerichtlich strafbaren Handlung"},{label:"Beleidigung",name:"Beleidigung"},{label:"Unbefugte Bildaufnahmen",name:"Unbefugte Bildaufnahmen"},{label:"Erpressung",name:"Erpressung"},{label:"Herabw\xfcrdigung religi\xf6ser Lehren",name:"Herabw\xfcrdigung religi\xf6ser Lehren"},{label:"Pornographische Darstellungen Minderj\xe4hriger",name:"Pornographische Darstellungen Minderj\xe4hriger"},{label:"Anbahnung von Sexualkontakten zu Unm\xfcndigen",name:"Anbahnung von Sexualkontakten zu Unm\xfcndigen"},{label:"Terroristische Vereinigung",name:"Terroristische Vereinigung"},{label:"Anleitung zur Begehung einer terroristischen Straftat",name:"Anleitung zur Begehung einer terroristischen Straftat"},{label:"Anleitung zu terroristischen Straftaten und Guthei\xdfung terroristischer Straftaten",name:"Anleitung zu terroristischen Straftaten und Guthei\xdfung terroristischer Straftaten"},{label:"Verhetzung",name:"Verhetzung"},{label:"Nazionalsozialistische Propaganga",name:"Nazionalsozialistische Propaganga"}]},loi_fr:{header:a._('Bill confirming respect for the principles of the Republic Form', 'French_DSA.FormTitle', 'The title of the form'),subHeader:a._('Use this form to identify content that violates French laws that are subject to the bill confirming respect for the principles of the Republic. Please fill out the information below with as much detail as possible to allow us to evaluate your complaint.', 'French_DSA.FormDescription', 'Provides a description of what the form is used for'),laws:[{name:"Apology of/sympathy to crimes",label:a._('Apology of/sympathy to crimes', 'French_DSA.Law', 'A French law which a user can report content for takedown')},{name:"Provocation to discrimination, hatred or violence on the ground of origin, ethnic group, nation, race or religion, or sex, sexual orientation or gender identity or their disability",label:a._('Provocation to discrimination, hatred or violence on the ground of origin, ethnic group, nation, race or religion, or sex, sexual orientation or gender identity or their disability', 'French_DSA.Law', 'A French law which a user can report content for takedown')},{name:"Challenging the existence of crimes against humanity, denial, minimization or trivialization of crimes of genocide, crimes of enslavement or war crimes",label:a._('Challenging the existence of crimes against humanity, denial, minimization or trivialization of crimes of genocide, crimes of enslavement or war crimes', 'French_DSA.Law', 'A French law which a user can report content for takedown')},{name:"Sexual harassment",label:a._('Sexual harassment', 'French_DSA.Law', 'A French law which a user can report content for takedown')},{name:"Child pornography",label:a._('Child pornography', 'French_DSA.Law', 'A French law which a user can report content for takedown')},{name:"Human trafficking",label:a._('Human trafficking', 'French_DSA.Law', 'A French law which a user can report content for takedown')},{name:"Procuring/pimping",label:a._('Procuring/pimping', 'French_DSA.Law', 'A French law which a user can report content for takedown')},{name:"Direct provocation or public apology for acts of terrorism",label:a._('Direct provocation or public apology for acts of terrorism', 'French_DSA.Law', 'A French law which a user can report content for takedown')},{name:"Insult based on origin, ethnic group, nation, race or religion",label:a._('Insult based on origin, ethnic group, nation, race or religion', 'French_DSA.Law', 'A French law which a user can report content for takedown')},{name:"Insult based on gender, sexual orientation, gender identify or disability",label:a._('Insult based on gender, sexual orientation, gender identify or disability', 'French_DSA.Law', 'A French law which a user can report content for takedown')}]},dsa:{header:a._('European Union Illegal Content Reporting Form', 'DSA.FormTitle', 'The title of the form'),subHeader:a._('Use this form to report content you believe to be illegal in the European Union. Please fill out the form with as much detail as possible to allow us to efficiently evaluate your report.', 'DSA.FormDescription', 'The sub-title of the form'),laws:[{name:"Promoting or condoning terrorist acts",label:a._('Promoting or condoning terrorist acts', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Incitement to or apology of terrorist acts', 'DSA.Law', 'Example of this law')},{name:"Threatening commission of or condoning serious criminal offense",label:a._('Threatening commission of or condoning serious criminal offense', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Threats to commit serious criminal offense against individuals or their condemnation', 'DSA.Law', 'Example of this law')},{name:"Child sexual abuse material (CSAM)",label:a._('Child sexual abuse material (CSAM)', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Dissemination or\xA0 procurement of child pornographic content', 'DSA.Law', 'Example of this law')},{name:"Hate speech, hateful acts and discrimination",label:a._('Hate speech, hateful acts and discrimination', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Incitement to hatred, violence or discrimination against protected and vulnerable groups', 'DSA.Law', 'Example of this law')},{name:"Graphic Violence",label:a._('Graphic Violence', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Gore/graphic wounds and mutilation, beatings, excessive blood, corpses', 'DSA.Law', 'Example of this law')},{name:"Denying or condoning crimes against humanity",label:a._('Denying or condoning crimes against humanity', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Denial of genocides, war crimes and other crimes against humanity', 'DSA.Law', 'Example of this law')},{name:"Illegal goods and services",label:a._('Illegal goods and services', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Illegal sale of drugs, live animals or the illegal offer of services', 'DSA.Law', 'Example of this law')},{name:"Harassment",label:a._('Harassment', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Online stalking or sexual harassment', 'DSA.Law', 'Example of this law')},{name:"Harmful to minors",label:a._('Harmful to minors', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Incitement of minors to engage in actions which put them in physical danger or to intentionally harm themselves', 'DSA.Law', 'Example of this law')},{name:"Nudity or pornography",label:a._('Nudity or pornography', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Dissemination of pornographic content', 'DSA.Law', 'Example of this law')},{name:"Disinformation",label:a._('Disinformation', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Deliberate disinformation of individuals or groups of people', 'DSA.Law', 'Example of this law')},{name:"Affront to personal honor",label:a._('Affront to personal honor', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Insults or defamation', 'DSA.Law', 'Example of this law')},{name:"Violation of privacy",label:a._('Violation of privacy', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('E.g., Non-consensual sharing of private images', 'DSA.Law', 'Example of this law')},{name:"DMCA",label:a._('Copyright infringement', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:(0,i.jsxs)(l.xv,{size:"100",inline:!0,color:"warning",children:[" ",a._('Fill out the', 'Dsa.Law.DMCA', 'Subtext for filling out the DMCA form'),(0,i.jsxs)(l.rU,{href:"https://www.pinterest.com/about/copyright/dmca-pin/",underline:"always",display:"inline",children:[" ",a._(' Copyright Complaint form here', 'DSA.Law', 'Hyperlink to copyright form')]})]})},{name:"Trademark",label:a._('Trademark infringement', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:(0,i.jsxs)(l.xv,{size:"100",inline:!0,color:"warning",children:[" ",a._('Fill out the ', 'Dsa.Law.Trademark', 'Subtext for filling out the trademark form'),(0,i.jsxs)(l.rU,{href:"https://www.pinterest.com/about/trademark/",underline:"always",display:"inline",children:[" ",a._('Trademark Complaint form here', 'DSA.Law', 'Hyperlink to trademark form')]})]})},{name:"GDPR",label:a._('Contains my personal data', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:(0,i.jsxs)(l.xv,{size:"100",inline:!0,color:"warning",children:[" ",a._('You can delete your data by going to your settings or by contacting ', 'Dsa.Law.GDPR', 'Subtext for removing your personal data'),(0,i.jsxs)(l.rU,{href:"mailto:privacy-support@pinterest.com",underline:"always",display:"inline",children:[" ",a._('privacy-support@pinterest.com', 'DSA.Law', 'Hyperlink to privacy support email')]})]})},{name:"Other illegal behavior",label:a._('Other illegal behavior', 'DSA.Law', 'An EU law which a user can report content for takedown'),subtext:a._('Report behavior that does not match the above categories here', 'DSA.Law', 'Example of this law')}]}},n={header:a._('Complaint Information', 'AustriaKoPl-G.ComplaintInformation.Header', 'Complaint Information header'),reportedUrl:a._('Identify the URL of the content', 'AustriaKoPl-G.ContentUrlField', 'The url of the content the user wants to report'),dsaReportedUrl:a._('What is the URL of the content you want to report?', 'Dsa.ContentUrlField', 'The url of the content the user wants to report for DSA'),reportedUrlHelperText:a._('Please provide the full URL of the content you are complaining about. 1 URL per form.', 'AustriaKoPl-G.ComplaintInformation.ContentUrl.HelperText', 'Complaint Information url field helper text'),contentPortionHeader:a._('What portion(s) of the content are you reporting?', 'AustriaKoPl-G.ContentReporting.Header', 'Header describing which part of the content the user is reporting'),dsaContentPortionHeader:a._('What portion of the content are you reporting?', 'DSA.ContentReporting.Header', 'Header describing which part of the content the user is reporting for DSA'),lawsViolatedLabel:a._('Which law(s) do you believe the content violates?', 'AustriaKoPl-G.ContentReporting.Header', 'Header describing which part of the content the user is reporting'),dsaLawsViolatedLabel:a._('Why do you think this content is illegal under local law?', 'DSA.ContentReporting.Header', 'Header describing which part of the content the user is reporting for DSA'),dsaLawsViolatedSubtext:a._('Please carefully consider the option you select, so we can address your report as efficiently as possible.', 'DSA.ContentReporting.Subtext', 'Subtext asking to carefully choose the law being violated for DSA'),otherLabel:a._('Enter other portion of content', 'AustriaKoPl-G.ContentPortion.OtherValue', 'Field to describe other portion of the pin they are reporting'),dsaOtherLabel:a._('Please describe what other portion of the content you are reporting', 'DSA.ContentPortion.OtherValue', 'Field to describe other portion of the content they are reporting for DSA'),additionalInformationLabel:a._('Additional information on illegality of content (Optional)', 'AustriaKoPl-G.ContentReporting.Header', 'Header describing which part of the content the user is reporting'),additionalInformationPlaceholder:a._('250 character limit...', 'AustriaKoPl-G.ContentReporting.Header', 'Header describing which part of the content the user is reporting'),dsaAdditionalInformationLabel:a._('Please provide additional information about why you think the content is illegal. You may cite or link to relevant statutes, if you like. (Optional)', 'DSA.ContentReporting.Header', 'Label for the additional details textbox of the DSA form'),dsaAdditionalInformationPlaceholder:a._('Provide additional details here', 'DSA.ContentReporting.Placeholder', 'Placeholder for the additional details textbox of the DSA form'),countryHeader:a._('Under what country\u2019s laws do you believe this content is illegal?', 'DSA.Country.Header', 'Header describing the country in which the content is illegal'),otherViolationLabel:a._('Report behavior that does not match the above categories here', 'DSA.OtherViolation.Field', 'Field to describe other violation reason of the reported content'),attachmentLabel:a._('If you have additional documents that could help us understand your report (e.g., court order), you can attach it here. Please upload PDFs only, with a maximum file size of 5 MB.', 'DSA.OtherViolation.Field', 'Field for uplodaing attachments'),moduleCollapseLabel:a._('Collapse the module', 'DSA.CollapseModule', 'Text for collapsing items module'),moduleExpandLabel:a._('Expand the module', 'DSA.ExpandModule', 'Text for expanding items module'),noCountryResultText:a._('No countries found', 'DSA.NoCountries', 'Text for country combo box no countries found error'),clearButtonLabel:a._('Clear search field', 'DSA.ClearInput', 'Accessibility text for clearing combobox field'),invalidUrlText:a._('Invalid URL', 'DSA.Invalid Url', 'Accessibility text for invalid pinterest urls'),selectedLawErrorText:a._('Please fill out the appropriate form for this complaint', 'DSA.InvalidLaw', 'Accessibility text for redirecting to the appropriate place for this law'),multiselectPlaceholder:a._('Select an option', 'DSA.Multiselect.Placeholder', 'Header prompting user to select an option')},c={contactHeader:a._('Contact Information', 'TakedownsContactInformation.OwnerInformationHeading', 'Heading with the word Owner Information'),companyCheckbox:a._('Do you represent a complaints office? (Yes)', 'TakedownsContactInformation.ComplaintsOfficeValidation', 'Checkbox to determine if represents a complaints office'),company:a._('Complaints office', 'TakedownsContactInformation.ComplaintsOfficeNameField', 'The name of the organization or office submitting the complaint'),trustedFlaggerCheckbox:a._('Are you a trusted flagger? (Yes)', 'TakedownsContactInformation.TrustedFlagger', 'Checkbox to determine if reporter is a trusted flagger'),trustedFlaggerSubtext:a._('Trusted flaggers are designated parties, usually associated with NGOs, government entities, or private bodies', 'TakedownsContactInformation.TrustedFlaggerSubtext', 'Defines a trusted flagger'),anonSubmissionCheckbox:a._('Do you wish to remain anonymous? (Yes)', 'TakedownsContactInformation.AnonSubmission', 'Checkbox to determine if reporter wishes to remain anonymous'),anonSubmissionSubtext:a._('If you select this box, you will not receive any additional communications about your report, including the final outcome of your report.', 'TakedownsContactInformation.AnonSubmissionSubtext', 'Anon submission disclaimer'),organization:a._('Organization Name', 'TakedownsContactInformation.OrganizationNameField', 'The name of the organization or office submitting the complaint'),name:a._('Name of Reporter', 'TakedownsContactInformation.NameField', 'User\'s name'),email:a._('Email Address', 'TakedownsContactInformation.EmailField', 'User\'s email address'),phone:a._('Phone Number', 'TakedownsContactInformation.PhoneField', 'Users phone number'),address:a._('Full Address', 'TakedownsContactInformation.AddressField', 'User address')},h={termsHeading:a._('By checking the following boxes, I confirm:', 'TakedownsForm.LabelForCheckboxes', 'Label describing the checkboxes'),isAccurate:a._('The information in this application is accurate.', 'TakedownsContactInformation.isAccurateBoolean', 'Confirmation checkbox that information in form is accurate'),consequences:a._('I understand that if I use this form to submit fraudulent or abusive complaints, I might be subject to claims of liability by Pinterest or other third parties.', 'temp', 'temp'),possibleSuspension:a._('I understand that frequently submitting reports that are fraudulent or abusive may lead Pinterest to suspend the processing of my reports.', 'TakedownsContactInformation.possibleSuspension', 'Confirmation checkbox that fraudulent reports may lead to suspension'),terms:(0,i.jsx)(l.xv,{children:a._('I have a good faith belief that the content violates the law(s) identified.', 'TakedownsContactInformation.termsBoolean', 'Checkbox to confirm they are owner of items they are claiming')}),dsaIsAccurate:a._('I have a good faith belief that the information and allegations contained in this report are accurate and complete.', 'TakedownsContactInformation.DSA.termsBoolean', 'Checkbox to confirm that the information is accurate and complete'),submitText:a._('Submit', 'TakedownsForm.SubmitApplication', 'Submit application form'),cancelText:a._('Cancel', 'TakedownsForm.CancelApplication', 'Cancel application form'),errorCallout:a._('Please fill out all required fields before submitting the application', 'CCP.AppValidationCallout', 'Call out that lets user know there\'s a validation error ')},d={pin_image:a._('Pin Image / Video', 'TakedownsForm.ContentPortion.Image', 'Checkbox content portion for Image'),pin_description:a._('Pin Description', 'TakedownsForm.ContentPortion.Description', 'Checkbox content portion for Description'),pin_notes:a._('Pin Comments / Notes', 'TakedownsForm.ContentPortion.Notes', 'Checkbox content portion for Notes'),profile_image:a._('Profile Image', 'TakedownsForm.ContentPortion.Image', 'Checkbox content portion for Image'),profile_name:a._('Profile Name', 'TakedownsForm.ContentPortion.Name', 'Checkbox content portion for Name'),profile_description:a._('Profile Description', 'TakedownsForm.ContentPortion.Description', 'Checkbox content portion for Description'),board_name:a._('Board Name', 'TakedownsForm.ContentPortion.Name', 'Checkbox content portion for Name'),board_description:a._('Board Description', 'TakedownsForm.ContentPortion.Description', 'Checkbox content portion for Description'),other:a._('Other...', 'TakedownsForm.ContentPortion.Other', 'Checkbox content portion for Other')},m=(0,r.Z)({takedown:t[e],contactInformation:c,complaints:n,terms:h,reportedPortion:d},o);return{configuration:_[e],translations:m}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/56588-f10c9fc2f097ea83.js.map