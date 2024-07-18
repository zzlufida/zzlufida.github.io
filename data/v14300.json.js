window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14300","name":"vwMainVoucher","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--23、vwMainVoucher\r\nCREATE VIEW vwMainVoucher\r\nAS\r\nSELECT UA_Voucher.strVoucherType, UA_Voucher.dtVoucherDate, \r\n    UA_Voucher.strUnitName, UA_Voucher.strUnitID, UA_Voucher.strVoucherID, \r\n    UA_Voucher.strOpration, UA_Voucher.strSourceUnit, '' AS strSrcUnitName, \r\n    UA_Voucher.strBalanceType, UA_BankDef.strAccBankName, \r\n    UA_BankDef.strAccBankAccount, UA_Voucher.strBillID, UA_Voucher.strCurrencyID, \r\n    UA_Voucher.sngExchangeRate, UA_Voucher.strDigest, \r\n    UA_Voucher.intAppendVoucherNum, UA_Voucher.intNoID, UA_Voucher.strRecorder, \r\n    UA_Voucher.strAuditor, UA_Voucher.strReAuditor, UA_Voucher.dblValue, \r\n    UA_Voucher.dblTotal, UA_Voucher.strTotal, UA_Voucher.strAccBankID, \r\n    UA_Voucher.strBalancePerson, UA_Voucher.strLeader, UA_Voucher.strVoucherer, \r\n    UA_Voucher.bolBankSure\r\nFROM UA_Voucher LEFT OUTER JOIN\r\n    UA_UnitDef ON UA_Voucher.strUnitID = UA_UnitDef.strUnitID LEFT OUTER JOIN\r\n    UA_BankDef ON UA_Voucher.strAccBankID = UA_BankDef.strAccBankID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwMainVoucher"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423332","object_id":"column-423332","name":"strVoucherType","name_without_path":"strVoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423333","object_id":"column-423333","name":"dtVoucherDate","name_without_path":"dtVoucherDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423334","object_id":"column-423334","name":"strUnitName","name_without_path":"strUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423335","object_id":"column-423335","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423336","object_id":"column-423336","name":"strVoucherID","name_without_path":"strVoucherID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423337","object_id":"column-423337","name":"strOpration","name_without_path":"strOpration","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423338","object_id":"column-423338","name":"strSourceUnit","name_without_path":"strSourceUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423339","object_id":"column-423339","name":"strSrcUnitName","name_without_path":"strSrcUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423340","object_id":"column-423340","name":"strBalanceType","name_without_path":"strBalanceType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423341","object_id":"column-423341","name":"strAccBankName","name_without_path":"strAccBankName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423342","object_id":"column-423342","name":"strAccBankAccount","name_without_path":"strAccBankAccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423343","object_id":"column-423343","name":"strBillID","name_without_path":"strBillID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423344","object_id":"column-423344","name":"strCurrencyID","name_without_path":"strCurrencyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423345","object_id":"column-423345","name":"sngExchangeRate","name_without_path":"sngExchangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423346","object_id":"column-423346","name":"strDigest","name_without_path":"strDigest","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423347","object_id":"column-423347","name":"intAppendVoucherNum","name_without_path":"intAppendVoucherNum","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423348","object_id":"column-423348","name":"intNoID","name_without_path":"intNoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423349","object_id":"column-423349","name":"strRecorder","name_without_path":"strRecorder","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423350","object_id":"column-423350","name":"strAuditor","name_without_path":"strAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423351","object_id":"column-423351","name":"strReAuditor","name_without_path":"strReAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423352","object_id":"column-423352","name":"dblValue","name_without_path":"dblValue","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423353","object_id":"column-423353","name":"dblTotal","name_without_path":"dblTotal","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423354","object_id":"column-423354","name":"strTotal","name_without_path":"strTotal","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423355","object_id":"column-423355","name":"strAccBankID","name_without_path":"strAccBankID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423356","object_id":"column-423356","name":"strBalancePerson","name_without_path":"strBalancePerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423357","object_id":"column-423357","name":"strLeader","name_without_path":"strLeader","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423358","object_id":"column-423358","name":"strVoucherer","name_without_path":"strVoucherer","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423359","object_id":"column-423359","name":"bolBankSure","name_without_path":"bolBankSure","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};