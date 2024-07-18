window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13518","name":"v_im_im30referciqinv","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE   view v_im_im30referciqinv\r\n\r\nas\r\nselect \r\nex_ciqbook.id as cciqbookid,\r\nex_ciqbook.cciqbookcode,\r\nv_ex_ciqinvlist.cciqcode        , \r\nv_ex_ciqinvlist.cciqname        ,\r\nv_ex_ciqbookex.cinvcode as cciqinvcode,\r\nv_ex_ciqbookex.cinvname as cciqinvname,\r\nv_ex_ciqinvlist.cinvcode,\r\nv_ex_ciqinvlist.cinvname,\r\nv_ex_ciqbookex.cnapeitem,\r\nv_ex_ciqinvlist.cciqunitcode    ,\r\nv_ex_ciqinvlist.cciqunitname    ,\r\nv_ex_ciqinvlist.ccomunitcode    ,\r\nv_ex_ciqinvlist.ccomunitname    ,\r\ninventory.cinvaddcode,\r\nv_ex_ciqbookex.ccuscode,\r\nv_ex_ciqbookex.ccusname,\r\ncast(null as nvarchar(60)) as cvencode,\r\ncast(null as nvarchar(60)) as cvenname,\r\nv_ex_ciqinvlist.cinvdefine1     ,\r\nv_ex_ciqinvlist.cinvdefine2     ,\r\nv_ex_ciqinvlist.cinvdefine3     ,\r\nv_ex_ciqinvlist.cinvdefine4     ,\r\nv_ex_ciqinvlist.cinvdefine5     ,\r\nv_ex_ciqinvlist.cinvdefine6     ,\r\nv_ex_ciqinvlist.cinvdefine7     ,\r\nv_ex_ciqinvlist.cinvdefine8     ,\r\nv_ex_ciqinvlist.cinvdefine9     ,\r\nv_ex_ciqinvlist.cinvdefine10    ,\r\nv_ex_ciqinvlist.cinvdefine11    ,\r\nv_ex_ciqinvlist.cinvdefine12    ,\r\nv_ex_ciqinvlist.cinvdefine13    ,\r\nv_ex_ciqinvlist.cinvdefine14    ,\r\nv_ex_ciqinvlist.cinvdefine15    ,\r\nv_ex_ciqinvlist.cinvdefine16    ,\r\nv_ex_ciqinvlist.cinvstd         ,\r\nv_ex_ciqinvlist.fciqchangrate   ,\r\nv_ex_ciqbookex.cinvcode+'_@_'+v_ex_ciqinvlist.cinvcode as cciqinvinvcode,\r\n1 as iciqinvtype,\r\nex_ciqinvtype.cciqinvtype\r\n \r\nfrom v_ex_ciqbookex \r\ninner join ex_ciqbook on ex_ciqbook.id =v_ex_ciqbookex.id \r\ninner join v_ex_ciqinvlist on v_ex_ciqbookex.cinvcode =v_ex_ciqinvlist.cciqinvcode\r\ninner join ex_ciqinvtype on ex_ciqinvtype.iciqinvtype = 1 and ex_ciqinvtype.langid =@@langid \r\ninner join inventory on inventory.cinvcode =  v_ex_ciqinvlist.cinvcode\r\n \r\n \r\n \r\nunion \r\n \r\n\r\nselect \r\nex_ciqbook.id as cciqbookid,\r\nex_ciqbook.cciqbookcode,\r\nv_ex_ciqinvlist.cciqcode        , \r\nv_ex_ciqinvlist.cciqname        ,\r\nv_ex_ciqbookIM.cinvcode as cciqinvcode,\r\nv_ex_ciqbookIM.cinvname as cciqinvname,\r\nv_ex_ciqinvlist.cinvcode,\r\nv_ex_ciqinvlist.cinvname,\r\nv_ex_ciqbookIM.cnapeitem,\r\nv_ex_ciqinvlist.cciqunitcode    ,\r\nv_ex_ciqinvlist.cciqunitname    ,\r\nv_ex_ciqinvlist.ccomunitcode    ,\r\nv_ex_ciqinvlist.ccomunitname    ,\r\ninventory.cinvaddcode,\r\ncast(null as nvarchar(60)) as ccuscode,\r\ncast(null as nvarchar(60)) as ccusname,\r\nv_ex_ciqbookIM.cvencode,\r\nv_ex_ciqbookIM.cvenname,\r\nv_ex_ciqinvlist.cinvdefine1     ,\r\nv_ex_ciqinvlist.cinvdefine2     ,\r\nv_ex_ciqinvlist.cinvdefine3     ,\r\nv_ex_ciqinvlist.cinvdefine4     ,\r\nv_ex_ciqinvlist.cinvdefine5     ,\r\nv_ex_ciqinvlist.cinvdefine6     ,\r\nv_ex_ciqinvlist.cinvdefine7     ,\r\nv_ex_ciqinvlist.cinvdefine8     ,\r\nv_ex_ciqinvlist.cinvdefine9     ,\r\nv_ex_ciqinvlist.cinvdefine10    ,\r\nv_ex_ciqinvlist.cinvdefine11    ,\r\nv_ex_ciqinvlist.cinvdefine12    ,\r\nv_ex_ciqinvlist.cinvdefine13    ,\r\nv_ex_ciqinvlist.cinvdefine14    ,\r\nv_ex_ciqinvlist.cinvdefine15    ,\r\nv_ex_ciqinvlist.cinvdefine16    ,\r\nv_ex_ciqinvlist.cinvstd         ,\r\nv_ex_ciqinvlist.fciqchangrate   ,\r\nv_ex_ciqbookim.cinvcode+'_@_'+v_ex_ciqinvlist.cinvcode as cciqinvinvcode,\r\n0 as iciqinvtype,\r\nex_ciqinvtype.cciqinvtype\r\n \r\nfrom v_ex_ciqbookIM \r\ninner join ex_ciqbook on ex_ciqbook.id =v_ex_ciqbookIM.id \r\ninner join v_ex_ciqinvlist on v_ex_ciqbookIM.cinvcode =v_ex_ciqinvlist.cciqinvcode\r\ninner join ex_ciqinvtype on ex_ciqinvtype.iciqinvtype = 0 and ex_ciqinvtype.langid =@@langid \r\ninner join inventory on inventory.cinvcode =  v_ex_ciqinvlist.cinvcode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_im_im30referciqinv"},{"field":"Type","value":"View"}],"columns":[{"id":"column-382153","object_id":"column-382153","name":"cciqbookid","name_without_path":"cciqbookid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382154","object_id":"column-382154","name":"cciqbookcode","name_without_path":"cciqbookcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382155","object_id":"column-382155","name":"cciqcode","name_without_path":"cciqcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382191","object_id":"column-382191","name":"cciqname","name_without_path":"cciqname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382156","object_id":"column-382156","name":"cciqinvcode","name_without_path":"cciqinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382157","object_id":"column-382157","name":"cciqinvname","name_without_path":"cciqinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382158","object_id":"column-382158","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382159","object_id":"column-382159","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382160","object_id":"column-382160","name":"cnapeitem","name_without_path":"cnapeitem","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382161","object_id":"column-382161","name":"cciqunitcode","name_without_path":"cciqunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382162","object_id":"column-382162","name":"cciqunitname","name_without_path":"cciqunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382163","object_id":"column-382163","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382164","object_id":"column-382164","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382165","object_id":"column-382165","name":"cinvaddcode","name_without_path":"cinvaddcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382166","object_id":"column-382166","name":"ccuscode","name_without_path":"ccuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382167","object_id":"column-382167","name":"ccusname","name_without_path":"ccusname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382168","object_id":"column-382168","name":"cvencode","name_without_path":"cvencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382169","object_id":"column-382169","name":"cvenname","name_without_path":"cvenname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382170","object_id":"column-382170","name":"cinvdefine1","name_without_path":"cinvdefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382171","object_id":"column-382171","name":"cinvdefine2","name_without_path":"cinvdefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382172","object_id":"column-382172","name":"cinvdefine3","name_without_path":"cinvdefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382173","object_id":"column-382173","name":"cinvdefine4","name_without_path":"cinvdefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382174","object_id":"column-382174","name":"cinvdefine5","name_without_path":"cinvdefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382175","object_id":"column-382175","name":"cinvdefine6","name_without_path":"cinvdefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382176","object_id":"column-382176","name":"cinvdefine7","name_without_path":"cinvdefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382177","object_id":"column-382177","name":"cinvdefine8","name_without_path":"cinvdefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382178","object_id":"column-382178","name":"cinvdefine9","name_without_path":"cinvdefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382179","object_id":"column-382179","name":"cinvdefine10","name_without_path":"cinvdefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382180","object_id":"column-382180","name":"cinvdefine11","name_without_path":"cinvdefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382181","object_id":"column-382181","name":"cinvdefine12","name_without_path":"cinvdefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382182","object_id":"column-382182","name":"cinvdefine13","name_without_path":"cinvdefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382183","object_id":"column-382183","name":"cinvdefine14","name_without_path":"cinvdefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382184","object_id":"column-382184","name":"cinvdefine15","name_without_path":"cinvdefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382185","object_id":"column-382185","name":"cinvdefine16","name_without_path":"cinvdefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382186","object_id":"column-382186","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382187","object_id":"column-382187","name":"fciqchangrate","name_without_path":"fciqchangrate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382188","object_id":"column-382188","name":"cciqinvinvcode","name_without_path":"cciqinvinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"53","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382189","object_id":"column-382189","name":"iciqinvtype","name_without_path":"iciqinvtype","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-382190","object_id":"column-382190","name":"cciqinvtype","name_without_path":"cciqinvtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};