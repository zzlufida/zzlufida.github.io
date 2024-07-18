window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14012","name":"V_ST_SNRdrecords09","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create  view V_ST_SNRdrecords09  \r\n as   \r\n select rs.autoid,cinvaddcode,rs.cinvcode,  \r\n  computationunit.ccomunitname as cinvm_unit ,  \r\n  cinvname,cinvstd,rs.cposition,cposname,  \r\n rs.id,rs.iquantity,rs.cbatch,rs.cfree1,rs.cfree2,rs.cfree3,rs.cfree4,rs.cfree5,rs.cfree6,rs.cfree7,rs.cfree8,rs.cfree9,rs.cfree10,  \r\n case when rd.id is null  then  cvouchcode else convert(nvarchar(20),rs.autoid) end as cvouchcode ,  \r\n case when rd.id is null  then  cinvouchcode else rd.ccode end as  cinvouchcode,   \r\n case when rd.id is null then rs.cinvouchtype  else N'09'  end as cinvouchtype,  \r\n convert(money, 0) as ufts,case when vendor.cvencode is null then v2.cvencode else vendor.cvencode end  as cvencode,  \r\n case when vendor.cvenabbname is null then v2.cvenabbname else vendor.cvenabbname end as cvenabbname,rs.autoid as autoid2,  \r\n rs.dmadedate as dmdate,rs.dvdate,case isnull(rs.cmassunit,0) when 0 then null else rs.cmassunit end  as cmassunit,  \r\n rs.imassdate,'' as cmolotcode,'' as cmocode,idlsid,  \r\n null as impoids ,strowguid,rs.cbserviceoid,  \r\n '' as cservicecode ,isnull(crejectcode,'') as crejectcode,  \r\n rs.cserviceoid,isnull(rs.iinvsncount,0) as iinvsncount,icrmvouchids  \r\n  \r\n from rdrecords09 rs inner join inventory on rs.cinvcode=inventory.cinvcode  \r\n  left join position on rs.cposition=position.cposcode  \r\n  inner join computationunit on inventory.ccomunitcode = computationunit.ccomunitcode  \r\n  left join vendor on case when isnull(rs.cvmivencode,'')='' then rs.cbvencode else rs.cvmivencode end =vendor.cvencode  \r\n  left join mainbatch mb on rs.autoid=mb.RdID and mb.cvouchtype =N'09'  \r\n  left join rdrecord09 rd on rd.id=rs.id and mb.rdid is not null--and inventory.btrack=1 and isnull(cinvouchcode,'')=''  \r\n  left join vendor v2 on  rd.cvencode =v2.cvencode  \r\n where inventory.bSerial=1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_ST_SNRdrecords09"},{"field":"Type","value":"View"}],"columns":[{"id":"column-411732","object_id":"column-411732","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411733","object_id":"column-411733","name":"cinvaddcode","name_without_path":"cinvaddcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411734","object_id":"column-411734","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411735","object_id":"column-411735","name":"cinvm_unit","name_without_path":"cinvm_unit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411736","object_id":"column-411736","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411737","object_id":"column-411737","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411738","object_id":"column-411738","name":"cposition","name_without_path":"cposition","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411739","object_id":"column-411739","name":"cposname","name_without_path":"cposname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411740","object_id":"column-411740","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411741","object_id":"column-411741","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411742","object_id":"column-411742","name":"cbatch","name_without_path":"cbatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411743","object_id":"column-411743","name":"cfree1","name_without_path":"cfree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411744","object_id":"column-411744","name":"cfree2","name_without_path":"cfree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411745","object_id":"column-411745","name":"cfree3","name_without_path":"cfree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411746","object_id":"column-411746","name":"cfree4","name_without_path":"cfree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411747","object_id":"column-411747","name":"cfree5","name_without_path":"cfree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411748","object_id":"column-411748","name":"cfree6","name_without_path":"cfree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411749","object_id":"column-411749","name":"cfree7","name_without_path":"cfree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411750","object_id":"column-411750","name":"cfree8","name_without_path":"cfree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411751","object_id":"column-411751","name":"cfree9","name_without_path":"cfree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411752","object_id":"column-411752","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411753","object_id":"column-411753","name":"cvouchcode","name_without_path":"cvouchcode","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411754","object_id":"column-411754","name":"cinvouchcode","name_without_path":"cinvouchcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411755","object_id":"column-411755","name":"cinvouchtype","name_without_path":"cinvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411756","object_id":"column-411756","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411757","object_id":"column-411757","name":"cvencode","name_without_path":"cvencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411758","object_id":"column-411758","name":"cvenabbname","name_without_path":"cvenabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411759","object_id":"column-411759","name":"autoid2","name_without_path":"autoid2","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411760","object_id":"column-411760","name":"dmdate","name_without_path":"dmdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411761","object_id":"column-411761","name":"dvdate","name_without_path":"dvdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411762","object_id":"column-411762","name":"cmassunit","name_without_path":"cmassunit","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411763","object_id":"column-411763","name":"imassdate","name_without_path":"imassdate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411764","object_id":"column-411764","name":"cmolotcode","name_without_path":"cmolotcode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411765","object_id":"column-411765","name":"cmocode","name_without_path":"cmocode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411766","object_id":"column-411766","name":"idlsid","name_without_path":"idlsid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411767","object_id":"column-411767","name":"impoids","name_without_path":"impoids","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411768","object_id":"column-411768","name":"strowguid","name_without_path":"strowguid","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411769","object_id":"column-411769","name":"cbserviceoid","name_without_path":"cbserviceoid","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"38","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411770","object_id":"column-411770","name":"cservicecode","name_without_path":"cservicecode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411771","object_id":"column-411771","name":"crejectcode","name_without_path":"crejectcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411772","object_id":"column-411772","name":"cserviceoid","name_without_path":"cserviceoid","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"38","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411773","object_id":"column-411773","name":"iinvsncount","name_without_path":"iinvsncount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411774","object_id":"column-411774","name":"icrmvouchids","name_without_path":"icrmvouchids","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};