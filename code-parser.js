const c_vars = ["double", "float", "int", "long", "char", "short"];
const custom_vars = ["Vector3", "Vector3f", "Vector2", "Vector2f", "Matrix3x3", "Matrix3x3f", "Matrix4x4", "Matrix4x4f", "Quaternion", "Quaternionf"];
const keywords = ["if", "else", "return", "for", "while", "switch", "case", "do", "#include", "# include"]
const codeEl = document.getElementById("code-block");
let code = codeEl.textContent;

// Step 1: Escape HTML characters
code = code
.replace(/&/g, '&amp;')
.replace(/</g, '&lt;')
.replace(/>/g, '&gt;');

// Step 2: Highlight comments (//...)
code = code.replace(/(".*?"|'.*?')/g, '<span class="string">$1</span>');
code = code.replace(/(\/\/.*?$)/gm, '<span class="comment">$1</span>');

// Step 3: Highlight strings ("..." or '...')


// Step 4: Highlight keywords
const c_var_regex = new RegExp('\\b(' + c_vars.join('|') + ')\\b', 'g');
code = code.replace(c_var_regex, '<span class="c_var">$1</span>');

const custom_var_regex = new RegExp('\\b(' + custom_vars.join('|') + ')\\b', 'g');
code = code.replace(custom_var_regex, '<span class="custom_var">$1</span>');

const keyword_regex = new RegExp('\\b(' + keywords.join('|') + ')\\b', 'g');
code = code.replace(keyword_regex, '<span class="keyword">$1</span>');

// Step 5: Set as innerHTML (not textContent)
codeEl.innerHTML = code;