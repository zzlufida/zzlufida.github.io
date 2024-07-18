window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12117","name":"rel_worksheet_activity","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view rel_worksheet_activity\r\n  as \r\nSELECT w.ws_id , a.actvt_id   \r\nFROM tc_activity a WITH(NOLOCK) \r\ninner join tc_worksheet w WITH(NOLOCK) on  ( w.ws_id = a.rel_obj_id and a.rel_obj_type=54)  \r\nor  ( exists  (select empdispatch_id  from tc_empdispatch  where  empdispatch_refid01=ws_id  and a.rel_obj_id =tc_empdispatch.empdispatch_id   and  a.rel_obj_type=56    ) )\r\nwhere (rel_obj_type=56 or  rel_obj_type=54) --为了避免 rel_obj_id的类型问题 先按rel_obj_type过滤出来","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rel_worksheet_activity"},{"field":"Type","value":"View"}],"columns":[{"id":"column-280358","object_id":"column-280358","name":"ws_id","name_without_path":"ws_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280359","object_id":"column-280359","name":"actvt_id","name_without_path":"actvt_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};