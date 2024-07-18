window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12656","name":"v_bcc_bom","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_bcc_bom\r\nas select distinct \r\n       PartId=bom_parent.ParentId,\r\n       Dept=bom_opcomponentopt.DrawDeptCode\r\n   from bom_parent inner join bom_opcomponent on bom_opcomponent.BomId =bom_parent.BomId\r\n                   left outer join bom_opcomponentopt on bom_opcomponentopt.OptionsId = bom_opcomponent.OptionsId","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_bcc_bom"},{"field":"Type","value":"View"}],"columns":[{"id":"column-315334","object_id":"column-315334","name":"PartId","name_without_path":"PartId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315335","object_id":"column-315335","name":"Dept","name_without_path":"Dept","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};