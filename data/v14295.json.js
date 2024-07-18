window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14295","name":"vwIn","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--19、vwIn\r\nCREATE VIEW vwIn\r\nAS\r\nSELECT UA_BeginBalance.strUnitID, UA_BeginBalance.strUnitName, \r\n    UA_BeginBalance.dblBeginBalance, UA_SubVoucher.dblAmount AS SR, \r\n    0 AS ZC, UA_Voucher.dtVoucherDate, UA_BeginBalance.strAccBankName, \r\n    UA_BeginBalance.strAccBankID\r\nFROM UA_SubVoucher INNER JOIN\r\n    UA_Voucher ON \r\n    UA_SubVoucher.intNoID = UA_Voucher.intNoID INNER JOIN\r\n    UA_BeginBalance ON \r\n    UA_Voucher.strUnitID = UA_BeginBalance.strUnitID\r\nWHERE (LEFT(UA_Voucher.strVoucherType, 1) = '收')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwIn"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423295","object_id":"column-423295","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423296","object_id":"column-423296","name":"strUnitName","name_without_path":"strUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423297","object_id":"column-423297","name":"dblBeginBalance","name_without_path":"dblBeginBalance","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423298","object_id":"column-423298","name":"SR","name_without_path":"SR","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423299","object_id":"column-423299","name":"ZC","name_without_path":"ZC","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423300","object_id":"column-423300","name":"dtVoucherDate","name_without_path":"dtVoucherDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423301","object_id":"column-423301","name":"strAccBankName","name_without_path":"strAccBankName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423302","object_id":"column-423302","name":"strAccBankID","name_without_path":"strAccBankID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};