window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12737","name":"v_CO_CASC_MaxBomid","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view v_CO_CASC_MaxBomid\r\nas\r\n\r\nselect bas_part.Partid,MAX(b.bomid) AS bomid \r\nfrom bom_parent p inner join bom_bom b on p.bomid=b.bomid \r\ninner join bas_part on p.ParentId=bas_part.Partid \r\nGROUP BY bas_part.Partid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_CO_CASC_MaxBomid"},{"field":"Type","value":"View"}],"columns":[{"id":"column-318231","object_id":"column-318231","name":"Partid","name_without_path":"Partid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-318232","object_id":"column-318232","name":"bomid","name_without_path":"bomid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};