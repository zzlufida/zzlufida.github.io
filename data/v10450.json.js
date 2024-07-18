window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10450","name":"crm_v_kpiperiodbymonth","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view  [dbo].crm_v_kpiperiodbymonth as  \r\n SELECT     \r\n\t'crm_kpiperiod'as cPdCode,\r\n\tup.iId as iPeriodIndex,\r\n\tup.dBegin as dBeginDate,\r\n\tup.dEnd as dEndDate,\r\n\tup.iYear as iyear\r\n  FROM ufsystem..ua_period  up WITH(NOLOCK)  \r\n  WHERE  up.cAcc_Id = substring(DB_NAME(),8,LEN(DB_NAME())-12)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"crm_v_kpiperiodbymonth"},{"field":"Type","value":"View"}],"columns":[{"id":"column-189471","object_id":"column-189471","name":"cPdCode","name_without_path":"cPdCode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"13","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189472","object_id":"column-189472","name":"iPeriodIndex","name_without_path":"iPeriodIndex","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189473","object_id":"column-189473","name":"dBeginDate","name_without_path":"dBeginDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189474","object_id":"column-189474","name":"dEndDate","name_without_path":"dEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-189475","object_id":"column-189475","name":"iyear","name_without_path":"iyear","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};