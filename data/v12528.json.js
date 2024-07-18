window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12528","name":"tc_partapplyToWorksheetView","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view tc_partapplyToWorksheetView as    \r\n  \r\nselect pa.partapply_id as partapply_id,wk.ws_id as worksheet_id\r\nfrom tc_partapply_d pa WITH(NOLOCK)   \r\ninner join tc_worksheet wk WITH(NOLOCK)  on pa.service_id=wk.ws_id   \r\ngroup by pa.partapply_id ,wk.ws_id","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"tc_partapplyToWorksheetView"},{"field":"Type","value":"View"}],"columns":[{"id":"column-310466","object_id":"column-310466","name":"partapply_id","name_without_path":"partapply_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310467","object_id":"column-310467","name":"worksheet_id","name_without_path":"worksheet_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"22, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};