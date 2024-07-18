window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14356","name":"vwVlist","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--38、vwVlist\r\nCREATE VIEW dbo.vwVlist\r\nAS\r\nSELECT UA_Voucher.intNoID, UA_Voucher.strVoucherType, UA_Voucher.strUnitID, \r\n      UA_UnitDef.strUnitName, UA_Voucher.strOpration, UA_Voucher.dtVoucherDate, \r\n      UA_Voucher.strBalanceType, UA_Voucher.strSourceUnit, \r\n      UA_Voucher.intAppendVoucherNum, UA_Voucher.strCurrencyID, \r\n      UA_Voucher.sngExchangeRate, vwVouchJE.JE AS JE, UA_Voucher.strDigest, \r\n      UA_Voucher.strRecorder, UA_Voucher.strAuditor, UA_Voucher.strReAuditor, \r\n      (CASE WHEN (isnull(UA_Voucher.strVoucherer, '') <> '') THEN '1' ELSE '' END) \r\n      AS strVoucherer, UA_BankDef.strAccBankID, UA_BankDef.strAccBankName, \r\n      UA_BankDef.strAccBankAccount, UA_Voucher.bolFlag, UA_Voucher.strVoucherID, \r\n      UA_Voucher.bolBankSure, UA_Voucher.dblTotal, UA_Voucher.strTotal,UA_Voucher.strBalanceObj\r\nFROM UA_Voucher LEFT JOIN\r\n      vwVouchJE ON UA_Voucher.intNoID = vwVouchJE.intNoID INNER JOIN\r\n      UA_UnitDef ON UA_Voucher.strUnitID = UA_UnitDef.strUnitID LEFT OUTER JOIN\r\n      UA_BankDef ON UA_Voucher.strAccBankID = UA_BankDef.strAccBankID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwVlist"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424721","object_id":"column-424721","name":"intNoID","name_without_path":"intNoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424722","object_id":"column-424722","name":"strVoucherType","name_without_path":"strVoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424723","object_id":"column-424723","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424724","object_id":"column-424724","name":"strUnitName","name_without_path":"strUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424725","object_id":"column-424725","name":"strOpration","name_without_path":"strOpration","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424726","object_id":"column-424726","name":"dtVoucherDate","name_without_path":"dtVoucherDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424727","object_id":"column-424727","name":"strBalanceType","name_without_path":"strBalanceType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424728","object_id":"column-424728","name":"strSourceUnit","name_without_path":"strSourceUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424729","object_id":"column-424729","name":"intAppendVoucherNum","name_without_path":"intAppendVoucherNum","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424730","object_id":"column-424730","name":"strCurrencyID","name_without_path":"strCurrencyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424731","object_id":"column-424731","name":"sngExchangeRate","name_without_path":"sngExchangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424732","object_id":"column-424732","name":"JE","name_without_path":"JE","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424733","object_id":"column-424733","name":"strDigest","name_without_path":"strDigest","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424734","object_id":"column-424734","name":"strRecorder","name_without_path":"strRecorder","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424735","object_id":"column-424735","name":"strAuditor","name_without_path":"strAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424736","object_id":"column-424736","name":"strReAuditor","name_without_path":"strReAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424737","object_id":"column-424737","name":"strVoucherer","name_without_path":"strVoucherer","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424738","object_id":"column-424738","name":"strAccBankID","name_without_path":"strAccBankID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424739","object_id":"column-424739","name":"strAccBankName","name_without_path":"strAccBankName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424740","object_id":"column-424740","name":"strAccBankAccount","name_without_path":"strAccBankAccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424741","object_id":"column-424741","name":"bolFlag","name_without_path":"bolFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424742","object_id":"column-424742","name":"strVoucherID","name_without_path":"strVoucherID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424743","object_id":"column-424743","name":"bolBankSure","name_without_path":"bolBankSure","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424744","object_id":"column-424744","name":"dblTotal","name_without_path":"dblTotal","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424746","object_id":"column-424746","name":"strTotal","name_without_path":"strTotal","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424745","object_id":"column-424745","name":"strBalanceObj","name_without_path":"strBalanceObj","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};