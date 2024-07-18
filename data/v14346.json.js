window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14346","name":"vwSubVoucher","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--33、vwSubVoucher\r\nCREATE VIEW vwSubVoucher\r\nAS\r\nSELECT UA_SubVoucher.intID, UA_SubVoucher.intNoID, \r\n    UA_IncomeExpenditureItem.strIncNode, \r\n    UA_IncomeExpenditureItem.strIncExpItemName, \r\n    UA_CapitalProperty.strCapitalPropertyID, \r\n    UA_CapitalProperty.strCapitalPropertyName, UA_Voucher.strVoucherType, \r\n    UA_SubVoucher.strBudgetType, UA_SubVoucher.dblAmount, \r\n    UA_SubVoucher.strDescription\r\nFROM UA_SubVoucher INNER JOIN\r\n    UA_Voucher ON \r\n    UA_SubVoucher.intNoID = UA_Voucher.intNoID LEFT OUTER JOIN\r\n    UA_CapitalProperty ON \r\n    UA_SubVoucher.strCapitalPropertyID = UA_CapitalProperty.strCapitalPropertyID\r\n     LEFT OUTER JOIN\r\n    UA_IncomeExpenditureItem ON \r\n    UA_SubVoucher.strIncNode = UA_IncomeExpenditureItem.strIncNode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwSubVoucher"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424628","object_id":"column-424628","name":"intID","name_without_path":"intID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424629","object_id":"column-424629","name":"intNoID","name_without_path":"intNoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424630","object_id":"column-424630","name":"strIncNode","name_without_path":"strIncNode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424631","object_id":"column-424631","name":"strIncExpItemName","name_without_path":"strIncExpItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424632","object_id":"column-424632","name":"strCapitalPropertyID","name_without_path":"strCapitalPropertyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424633","object_id":"column-424633","name":"strCapitalPropertyName","name_without_path":"strCapitalPropertyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424634","object_id":"column-424634","name":"strVoucherType","name_without_path":"strVoucherType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424635","object_id":"column-424635","name":"strBudgetType","name_without_path":"strBudgetType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424636","object_id":"column-424636","name":"dblAmount","name_without_path":"dblAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424637","object_id":"column-424637","name":"strDescription","name_without_path":"strDescription","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};