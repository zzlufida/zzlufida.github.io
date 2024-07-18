window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10521","name":"EB_View_OrderDefineMappingList","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[EB_View_OrderDefineMappingList]\r\nAS\r\nSELECT      dbo.EB_OrderDefineMapping.OID, dbo.EB_OrderDefineMapping.cOrderInfoKey, dbo.EB_OrderDefineMapping.cDefineKey, \r\n                      dbo.EB_OrderDefineMapping.cExplain, dbo.EB_OrderDefineMapping.bDefault, dbo.EB_OrderDefineMapping.cOrderInfoKeyName, \r\n                      dbo.EB_RefCommon.cKeyName AS cdefinekeyname\r\nFROM         dbo.EB_OrderDefineMapping LEFT OUTER JOIN\r\n                      dbo.EB_RefCommon ON dbo.EB_OrderDefineMapping.cDefineKey = dbo.EB_RefCommon.cKeyCode\r\nwhere dbo.EB_RefCommon.ckeytype<>'EB.BatchModifyRefund'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EB_View_OrderDefineMappingList"},{"field":"Type","value":"View"}],"columns":[{"id":"column-192734","object_id":"column-192734","name":"OID","name_without_path":"OID","description":null,"is_pk":false,"is_identity":true,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-192735","object_id":"column-192735","name":"cOrderInfoKey","name_without_path":"cOrderInfoKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-192736","object_id":"column-192736","name":"cDefineKey","name_without_path":"cDefineKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-192737","object_id":"column-192737","name":"cExplain","name_without_path":"cExplain","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-192738","object_id":"column-192738","name":"bDefault","name_without_path":"bDefault","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-192739","object_id":"column-192739","name":"cOrderInfoKeyName","name_without_path":"cOrderInfoKeyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-192740","object_id":"column-192740","name":"cdefinekeyname","name_without_path":"cdefinekeyname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};