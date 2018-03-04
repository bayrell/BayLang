var bayrell_rtl = require('bayrell_rtl');
var rtl = bayrell_rtl.rtl;


base_path = '';
if (typeof __dirname != 'undefined') base_path = rtl.clone(__dirname);
else if (typeof global.__dirname != 'undefined') base_path = rtl.clone(global.__dirname);


module.exports = {
	'type': 1,
	'base_path': base_path,
	'files': [
		'CommonParser',
		'CommonTranslator',
		'ModuleDescription',
		'OpCodes/BaseOpCode',
		'OpCodes/OpAdd',
		'OpCodes/OpAnd',
		'OpCodes/OpArray',
		'OpCodes/OpCalc',
		'OpCodes/OpClone',
		'OpCodes/OpCmp',
		'OpCodes/OpConcat',
		'OpCodes/OpDec',
		'OpCodes/OpDiv',
		'OpCodes/OpFixed',
		'OpCodes/OpFlags',
		'OpCodes/OpInc',
		'OpCodes/OpLink',
		'OpCodes/OpMod',
		'OpCodes/OpMult',
		'OpCodes/OpNeg',
		'OpCodes/OpNew',
		'OpCodes/OpNope',
		'OpCodes/OpNot',
		'OpCodes/OpOr',
		'OpCodes/OpPostDec',
		'OpCodes/OpPostInc',
		'OpCodes/OpPow',
		'OpCodes/OpPreDec',
		'OpCodes/OpPreInc',
		'OpCodes/OpString',
		'OpCodes/OpSub',
		'OpCodes/OpTernary',
		'LangBay/ParserBay',
		'LangES6/TranslatorES6',
	],
};

