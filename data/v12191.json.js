window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12191","name":"SA_CurrentStockForMerp","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW SA_CurrentStockForMerp\r\nas\r\nselect i.cinvcode,i.cinvname,i.cinvstd,i.iid,c.cwhcode,w.cwhname,saunit.cComUnitName,cSAComUnitcode,ComputationUnit.cComUnitName as cSAComUnitname,ISNULL(cfree1,N'') as cfree1,ISNULL(cfree2,N'') as cfree2,ISNULL(cfree3,N'') as cfree3,ISNULL(cfree4,N'') as cfree4,ISNULL(cfree5,N'') as cfree5,\r\nISNULL(cfree6,N'') as cfree6,ISNULL(cfree7,N'') as cfree7,ISNULL(cfree8,N'') as cfree8,ISNULL(cfree9,N'') as cfree9,ISNULL(cfree10,N'') as cfree10,\r\n     sum(isnull(iquantity,0)) as iquantity,sum(case when igrouptype=1 then isnull(iquantity,0)/ComputationUnit.ichangrate else isnull(inum,0) end) as inum,\r\n     sum((case when lower(isnull(a1.cvalue,'')) ='true' then 1 else 0 end) * isnull(finquantity,0)\r\n        +(case when lower(isnull(a2.cvalue,'')) ='true' then 1 else 0 end) * isnull(ftransinquantity,0) ) as iinqty,\r\n     sum( (case when lower(isnull(a3.cvalue,'')) ='true' then 1 else 0 end) * isnull(foutquantity,0) \r\n        +(case when lower(isnull(a4.cvalue,'')) ='true' then 1 else 0 end) * isnull(ftransoutquantity,0)) as ioutqty,    \r\n   sum(  isnull(c.iquantity,0) +isnull(c.ipeqty,0)-isnull(fstopquantity,0)\r\n        +(case when lower(isnull(a1.cvalue,'')) ='true' then 1 else 0 end) * isnull(finquantity,0)\r\n        +(case when lower(isnull(a2.cvalue,'')) ='true' then 1 else 0 end) * isnull(ftransinquantity,0)  \r\n        -(case when lower(isnull(a3.cvalue,'')) ='true' then 1 else 0 end) * isnull(foutquantity,0) \r\n        -(case when lower(isnull(a4.cvalue,'')) ='true' then 1 else 0 end) * isnull(ftransoutquantity,0)) as icanuseqty,\r\n     sum((case when lower(isnull(a1.cvalue,'')) ='true' then 1 else 0 end) * (case when igrouptype=1 then isnull(fInQuantity,0)/ComputationUnit.ichangrate else isnull(finnum,0) end)\r\n        +(case when lower(isnull(a2.cvalue,'')) ='true' then 1 else 0 end) * (case when igrouptype=1 then isnull(ftransinquantity,0)/ComputationUnit.ichangrate else isnull(ftransinnum,0) end) ) as iinnum,\r\n     sum( (case when lower(isnull(a3.cvalue,'')) ='true' then 1 else 0 end) * (case when igrouptype=1 then isnull(foutquantity,0) /ComputationUnit.ichangrate else isnull(foutnum,0)  end)\r\n        +(case when lower(isnull(a4.cvalue,'')) ='true' then 1 else 0 end) * (case when igrouptype=1 then isnull(ftransoutquantity,0) /ComputationUnit.ichangrate else isnull(ftransoutnum,0) end)) as ioutnum,  \r\n   sum( case when igrouptype=1 then isnull(iquantity,0)/ComputationUnit.ichangrate else isnull(inum,0) end+isnull(c.ipenum,0)-isnull(fstopnum,0)\r\n        +(case when lower(isnull(a1.cvalue,'')) ='true' then 1 else 0 end) * (case when igrouptype=1 then isnull(finquantity,0)/ComputationUnit.ichangrate else isnull(finnum,0) end)\r\n        +(case when lower(isnull(a2.cvalue,'')) ='true' then 1 else 0 end) * (case when igrouptype=1 then isnull(ftransinquantity,0)/ComputationUnit.ichangrate else isnull(ftransinnum,0) end)\r\n        -(case when lower(isnull(a3.cvalue,'')) ='true' then 1 else 0 end) * (case when igrouptype=1 then isnull(foutquantity,0) /ComputationUnit.ichangrate else isnull(foutnum,0) end)\r\n        -(case when lower(isnull(a4.cvalue,'')) ='true' then 1 else 0 end) * (case when igrouptype=1 then isnull(ftransoutquantity,0) /ComputationUnit.ichangrate else isnull(ftransoutnum,0) end)) as icanusenum\r\nfrom currentstock c right join inventory i on c.cinvcode = i.cinvcode\r\n                      left join warehouse w on c.cwhcode = w.cwhcode\r\n                      left join accinformation a1  on a1.csysid ='SA' and a1.cname ='bStockCtlboncheck'\r\n                      left join accinformation a2  on a2.csysid ='SA' and a2.cname ='bStockCtlbontransway'\r\n        left join accinformation a3  on a3.csysid ='SA' and a3.cname ='bStockCtlbondispatch'\r\n        left join accinformation a4  on a4.csysid ='SA' and a4.cname ='bStockCtlbontransout'\r\n        left join ComputationUnit saunit on i.cComunitCode=saunit.cComunitCode\r\n        left join ComputationUnit on i.cSAComUnitcode=ComputationUnit.cComunitCode\r\nwhere bStopFlag=0 and bInAvailCalcu=1\r\ngroup by i.cinvcode,i.cinvname,i.cinvstd,i.iId,c.cwhcode,w.cwhname,cSAComUnitcode,saunit.cComUnitName,ComputationUnit.cComUnitName,ISNULL(cfree1,N''),ISNULL(cfree2,N''),ISNULL(cfree3,N''),ISNULL(cfree4,N''),ISNULL(cfree5,N''),\r\nISNULL(cfree6,N''),ISNULL(cfree7,N''),ISNULL(cfree8,N''),ISNULL(cfree9,N''),ISNULL(cfree10,N'')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SA_CurrentStockForMerp"},{"field":"Type","value":"View"}],"columns":[{"id":"column-284918","object_id":"column-284918","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284919","object_id":"column-284919","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284920","object_id":"column-284920","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284921","object_id":"column-284921","name":"iid","name_without_path":"iid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284922","object_id":"column-284922","name":"cwhcode","name_without_path":"cwhcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284923","object_id":"column-284923","name":"cwhname","name_without_path":"cwhname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284924","object_id":"column-284924","name":"cComUnitName","name_without_path":"cComUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284925","object_id":"column-284925","name":"cSAComUnitcode","name_without_path":"cSAComUnitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284926","object_id":"column-284926","name":"cSAComUnitname","name_without_path":"cSAComUnitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284927","object_id":"column-284927","name":"cfree1","name_without_path":"cfree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284928","object_id":"column-284928","name":"cfree2","name_without_path":"cfree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284929","object_id":"column-284929","name":"cfree3","name_without_path":"cfree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284930","object_id":"column-284930","name":"cfree4","name_without_path":"cfree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284931","object_id":"column-284931","name":"cfree5","name_without_path":"cfree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284932","object_id":"column-284932","name":"cfree6","name_without_path":"cfree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284933","object_id":"column-284933","name":"cfree7","name_without_path":"cfree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284934","object_id":"column-284934","name":"cfree8","name_without_path":"cfree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284935","object_id":"column-284935","name":"cfree9","name_without_path":"cfree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284936","object_id":"column-284936","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284937","object_id":"column-284937","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284938","object_id":"column-284938","name":"inum","name_without_path":"inum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284939","object_id":"column-284939","name":"iinqty","name_without_path":"iinqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284940","object_id":"column-284940","name":"ioutqty","name_without_path":"ioutqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284941","object_id":"column-284941","name":"icanuseqty","name_without_path":"icanuseqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284942","object_id":"column-284942","name":"iinnum","name_without_path":"iinnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284943","object_id":"column-284943","name":"ioutnum","name_without_path":"ioutnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284944","object_id":"column-284944","name":"icanusenum","name_without_path":"icanusenum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};