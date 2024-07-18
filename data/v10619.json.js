window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10619","name":"EQ_QRunTypeRef","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View EQ_QRunTypeRef\r\nAs\r\nSelect cRunTypeCode,cRunTypeName,\r\n(CASE iFlag WHEN 1 THEN dbo.UDF_GetResourceMessageByID('U8.CW.EQ.iFlag_1') WHEN 2 THEN dbo.UDF_GetResourceMessageByID('U8.CW.EQ.iFlag_2') WHEN 3 THEN dbo.UDF_GetResourceMessageByID('U8.CW.EQ.iFlag_3') END) AS iFlag \r\nfrom EQ_RunType","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EQ_QRunTypeRef"},{"field":"Type","value":"View"}],"columns":[{"id":"column-197812","object_id":"column-197812","name":"cRunTypeCode","name_without_path":"cRunTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197813","object_id":"column-197813","name":"cRunTypeName","name_without_path":"cRunTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197814","object_id":"column-197814","name":"iFlag","name_without_path":"iFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};