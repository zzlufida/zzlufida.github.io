window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14368","name":"vwZC_ZJZX","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--41、vwZC_ZJZX\r\nCREATE VIEW vwZC_ZJZX\r\nAS\r\nSELECT UA_Voucher.strUnitID, UA_SubVoucher.strCapitalPropertyID, \r\n    0 AS SR, UA_SubVoucher.dblAmount AS ZC, UA_Voucher.dtVoucherDate\r\nFROM UA_SubVoucher INNER JOIN\r\n    UA_Voucher ON UA_SubVoucher.intNoID = UA_Voucher.intNoID\r\nWHERE (LEFT(UA_Voucher.strVoucherType, 1) = '支')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwZC_ZJZX"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424907","object_id":"column-424907","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424908","object_id":"column-424908","name":"strCapitalPropertyID","name_without_path":"strCapitalPropertyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424909","object_id":"column-424909","name":"SR","name_without_path":"SR","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424910","object_id":"column-424910","name":"ZC","name_without_path":"ZC","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424911","object_id":"column-424911","name":"dtVoucherDate","name_without_path":"dtVoucherDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};