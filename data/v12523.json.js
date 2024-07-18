window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12523","name":"tc_failurelogToKCOtherOutListView","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view   tc_failurelogToKCOtherOutListView  as \r\nselect pa.failurelog_id as failurelog_id, rd.ID as ID  \r\nfrom rdrecord09 rd WITH(NOLOCK)   \r\ninner join rdrecords09 rds WITH(NOLOCK)  on rds.ID=rd.ID \r\ninner join tc_failurelog pa WITH(NOLOCK)  on rds.cCrmVouchCode=pa.ufcode  \r\nwhere  rd.cSource=N'返修登记单'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"tc_failurelogToKCOtherOutListView"},{"field":"Type","value":"View"}],"columns":[{"id":"column-310456","object_id":"column-310456","name":"failurelog_id","name_without_path":"failurelog_id","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"20, 0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-310457","object_id":"column-310457","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};