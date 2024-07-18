window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12993","name":"v_ex_getautocanceldata_ar","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_ex_getautocanceldata_ar\r\nas\r\nselect cDLCode as ccode,sum(iCAmount_f-iDAmount_f) as fmoney\r\nfrom ar_detail\r\nwhere iFlag<3 and cFlag=N'AR' and ccovouchtype like N'4%' and iOrderType=1 and cDLCode is not null\r\ngroup by cDLCOde","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_ex_getautocanceldata_ar"},{"field":"Type","value":"View"}],"columns":[{"id":"column-336922","object_id":"column-336922","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-336923","object_id":"column-336923","name":"fmoney","name_without_path":"fmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};