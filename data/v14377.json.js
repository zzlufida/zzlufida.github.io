window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14377","name":"WA_V_PRDetailOperation","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--生产制造引用计件工资视图\r\nCREATE  VIEW WA_V_PRDetailOperation\r\nas\r\nselect distinct wa_pr.operationid from \r\n(\r\nSELECT distinct sfc_operation.operationid from wa_prdetail left join sfc_operation on sfc_operation.opcode = wa_prdetail.cprocedureid\r\nunion \r\nselect distinct sfc_operation.operationid from wa_prwgdetail left join sfc_operation on sfc_operation.opcode = wa_prwgdetail.cprocedureid\r\n) as wa_pr where isnull(operationid,'') <> ''","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"WA_V_PRDetailOperation"},{"field":"Type","value":"View"}],"columns":[{"id":"column-424952","object_id":"column-424952","name":"operationid","name_without_path":"operationid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};