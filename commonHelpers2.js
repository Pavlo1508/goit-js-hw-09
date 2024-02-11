import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form"),n="feedback-form-state";function m(e,t){const o=JSON.stringify(t);localStorage.setItem(e,o)}function s(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function l(){return`<label>
			Email
			<input type="email" name="email" autofocus />
		</label>
		<label>
			Message
			<textarea name="message" rows="8"></textarea>
		</label>
		<button type="submit">Submit</button>`}a.innerHTML=l();a.addEventListener("input",r);a.addEventListener("submit",i);function r(){a.elements.email.type="text";const e=a.elements.email.value.trim(),t=a.elements.message.value.trim();m(n,{email:e,message:t})}function i(e){e.preventDefault();const t=s(n);t&&t.email&&t.message&&(console.log(t),localStorage.removeItem(n),a.reset())}function u(){const e=s(n);e&&(a.elements.email.value=e.email||"",a.elements.message.value=e.message||"")}u();
//# sourceMappingURL=commonHelpers2.js.map
