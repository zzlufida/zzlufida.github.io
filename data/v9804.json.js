window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9804","name":"AA_InitItem","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW AA_InitItem\r\nAS  \r\nSELECT a.SubID,a.ItemID,b.Name,a.IsArchive,a.Repeatable,a.Completed,a.iOrder,b.Remark\r\nFROM AA_InitItem_Base a INNER JOIN AA_InitItem_Lang b ON a.ItemID=b.ItemID\r\nWHERE b.LocaleID = dbo.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AA_InitItem"},{"field":"Type","value":"View"}],"columns":[{"id":"column-156506","object_id":"column-156506","name":"SubID","name_without_path":"SubID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156507","object_id":"column-156507","name":"ItemID","name_without_path":"ItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156508","object_id":"column-156508","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156509","object_id":"column-156509","name":"IsArchive","name_without_path":"IsArchive","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156510","object_id":"column-156510","name":"Repeatable","name_without_path":"Repeatable","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156511","object_id":"column-156511","name":"Completed","name_without_path":"Completed","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156512","object_id":"column-156512","name":"iOrder","name_without_path":"iOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-156513","object_id":"column-156513","name":"Remark","name_without_path":"Remark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"400","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};