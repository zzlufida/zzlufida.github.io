window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11656","name":"NB_QDetailFromBank","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW NB_QDetailFromBank\r\nAS \r\nselect a.*,\r\n f.cAccountName,f.cBankName cAccFromBankName,g.cBankName cAccFromBank,f.cCustomerNo,f.cBankAddress,\r\n      f.cOrgNo,f.cUnionBankNo,f.cPrinvince,f.cCity,cbankdefine1,cbankdefine2,cbankdefine3,cbankdefine4,cbankdefine5,cbankdefine6,cbankdefine7,\r\n      cbankdefine8,cbankdefine9,cbankdefine10,cbankdefine11,cbankdefine12,cbankdefine13,cbankdefine14,cbankdefine15,cbankdefine16,cAccountCode,cMAccount,\r\ncMAccountSymbol,f.cMoneyType as cAccMoneyType,f.dOpenDate,f.cbankid\r\n  from nb_detailfrombank a left join nb_account \r\nf on a.caccountfrom=f.caccountnumber \r\nleft join nb_bank g on f.cbankid=g.cbankid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NB_QDetailFromBank"},{"field":"Type","value":"View"}],"columns":[{"id":"column-247969","object_id":"column-247969","name":"iid","name_without_path":"iid","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247970","object_id":"column-247970","name":"cAccountFrom","name_without_path":"cAccountFrom","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247971","object_id":"column-247971","name":"dPayDate","name_without_path":"dPayDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247972","object_id":"column-247972","name":"cAccountTo","name_without_path":"cAccountTo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247973","object_id":"column-247973","name":"mMoney","name_without_path":"mMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247974","object_id":"column-247974","name":"cSign","name_without_path":"cSign","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247975","object_id":"column-247975","name":"cBillId","name_without_path":"cBillId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247976","object_id":"column-247976","name":"cCheckNum","name_without_path":"cCheckNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247977","object_id":"column-247977","name":"cAbstract","name_without_path":"cAbstract","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247978","object_id":"column-247978","name":"cTransType","name_without_path":"cTransType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247979","object_id":"column-247979","name":"cPurpose","name_without_path":"cPurpose","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247980","object_id":"column-247980","name":"bBalanced","name_without_path":"bBalanced","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247981","object_id":"column-247981","name":"iDZPeriod","name_without_path":"iDZPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247982","object_id":"column-247982","name":"iExported","name_without_path":"iExported","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247983","object_id":"column-247983","name":"cUniqueID","name_without_path":"cUniqueID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247984","object_id":"column-247984","name":"cCustomerName","name_without_path":"cCustomerName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247985","object_id":"column-247985","name":"cMoneyType","name_without_path":"cMoneyType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247986","object_id":"column-247986","name":"cBillIdInput","name_without_path":"cBillIdInput","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247987","object_id":"column-247987","name":"bHasAlerted","name_without_path":"bHasAlerted","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247988","object_id":"column-247988","name":"iMakePZ","name_without_path":"iMakePZ","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247989","object_id":"column-247989","name":"cLocked","name_without_path":"cLocked","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247990","object_id":"column-247990","name":"cTransNo","name_without_path":"cTransNo","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247991","object_id":"column-247991","name":"cVchID","name_without_path":"cVchID","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247992","object_id":"column-247992","name":"iConfirmState","name_without_path":"iConfirmState","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247993","object_id":"column-247993","name":"cBusType","name_without_path":"cBusType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247994","object_id":"column-247994","name":"cAccountName","name_without_path":"cAccountName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247995","object_id":"column-247995","name":"cAccFromBankName","name_without_path":"cAccFromBankName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247996","object_id":"column-247996","name":"cAccFromBank","name_without_path":"cAccFromBank","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247997","object_id":"column-247997","name":"cCustomerNo","name_without_path":"cCustomerNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247998","object_id":"column-247998","name":"cBankAddress","name_without_path":"cBankAddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-247999","object_id":"column-247999","name":"cOrgNo","name_without_path":"cOrgNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"9","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248000","object_id":"column-248000","name":"cUnionBankNo","name_without_path":"cUnionBankNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248001","object_id":"column-248001","name":"cPrinvince","name_without_path":"cPrinvince","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248002","object_id":"column-248002","name":"cCity","name_without_path":"cCity","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248003","object_id":"column-248003","name":"cbankdefine1","name_without_path":"cbankdefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248004","object_id":"column-248004","name":"cbankdefine2","name_without_path":"cbankdefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248005","object_id":"column-248005","name":"cbankdefine3","name_without_path":"cbankdefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248006","object_id":"column-248006","name":"cbankdefine4","name_without_path":"cbankdefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248007","object_id":"column-248007","name":"cbankdefine5","name_without_path":"cbankdefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248008","object_id":"column-248008","name":"cbankdefine6","name_without_path":"cbankdefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248009","object_id":"column-248009","name":"cbankdefine7","name_without_path":"cbankdefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248010","object_id":"column-248010","name":"cbankdefine8","name_without_path":"cbankdefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248011","object_id":"column-248011","name":"cbankdefine9","name_without_path":"cbankdefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248012","object_id":"column-248012","name":"cbankdefine10","name_without_path":"cbankdefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248013","object_id":"column-248013","name":"cbankdefine11","name_without_path":"cbankdefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248014","object_id":"column-248014","name":"cbankdefine12","name_without_path":"cbankdefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248015","object_id":"column-248015","name":"cbankdefine13","name_without_path":"cbankdefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248016","object_id":"column-248016","name":"cbankdefine14","name_without_path":"cbankdefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248017","object_id":"column-248017","name":"cbankdefine15","name_without_path":"cbankdefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248018","object_id":"column-248018","name":"cbankdefine16","name_without_path":"cbankdefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248019","object_id":"column-248019","name":"cAccountCode","name_without_path":"cAccountCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248020","object_id":"column-248020","name":"cMAccount","name_without_path":"cMAccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248021","object_id":"column-248021","name":"cMAccountSymbol","name_without_path":"cMAccountSymbol","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248022","object_id":"column-248022","name":"cAccMoneyType","name_without_path":"cAccMoneyType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248023","object_id":"column-248023","name":"dOpenDate","name_without_path":"dOpenDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-248024","object_id":"column-248024","name":"cbankid","name_without_path":"cbankid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};