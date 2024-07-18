window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14341","name":"vwQM","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--27、vwQM\r\nCREATE VIEW vwQM\r\nAS\r\nSELECT NULL AS dtVoucherDate, NULL AS strVoucherID, UA_UnitDef.strUnitID, \r\n    UA_BeginBalance.strAccBankID, '期初余额' AS strDigest, \r\n    UA_BeginBalance.dblBeginBalance AS QC, 0 AS SR, 0 AS ZC\r\nFROM UA_BeginBalance RIGHT OUTER JOIN\r\n    UA_UnitDef ON UA_BeginBalance.strUnitID = UA_UnitDef.strUnitID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwQM"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424589","object_id":"column-424589","name":"dtVoucherDate","name_without_path":"dtVoucherDate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424590","object_id":"column-424590","name":"strVoucherID","name_without_path":"strVoucherID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424591","object_id":"column-424591","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424592","object_id":"column-424592","name":"strAccBankID","name_without_path":"strAccBankID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424593","object_id":"column-424593","name":"strDigest","name_without_path":"strDigest","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424594","object_id":"column-424594","name":"QC","name_without_path":"QC","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424595","object_id":"column-424595","name":"SR","name_without_path":"SR","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-424596","object_id":"column-424596","name":"ZC","name_without_path":"ZC","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};