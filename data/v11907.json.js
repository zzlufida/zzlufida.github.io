window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11907","name":"pu_v_preparestockbyarrforst","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view pu_v_preparestockbyarrforst\r\nas      \r\nselect\r\n igrouptype,       \r\n N'0101' as Subject,      \r\n Arr.id as DocumentId,      \r\n N'56' as DocumentType,      \r\n Arr.cBusType,N'' as cSource,Arr.ddate,      \r\n (case isnull(cbustype,N'') when N'代管采购' then isnull(Arr.cVenCode,N'') else N'' end) as cVMIVenCode,      \r\n (case isnull(Arr.iBillType,0)       \r\n  when 0 then      \r\n   (case when Arrs.TmpQty - isnull(Arrs.frefusequantity,0) > 0 then Arrs.TmpQty - isnull(Arrs.frefusequantity,0) else 0 end)      \r\n  when 1 then      \r\n   (case when Arrs.TmpQty < 0 then Arrs.TmpQty else 0 end)      \r\n end) as iQuantity,      \r\n (case isnull(Arr.iBillType,0)       \r\n  when 0 then      \r\n   (case when Arrs.TmpNum - isnull(Arrs.frefuseNum,0) > 0 then Arrs.TmpNum - isnull(Arrs.frefuseNum,0) else 0 end)      \r\n  when 1 then      \r\n   (case when Arrs.TmpNum < 0 then Arrs.TmpNum else 0 end)      \r\n end) as iNum,      \r\n isnull(Arrs.iQuantity,0) as iBillQuantity,      \r\n isnull(Arrs.iNum,0) as iBillNum,      \r\n Arrs.cWhCode,Arrs.cInvCode,0 as ItemId,      \r\n isnull(Arrs.cBatch,N'') as cBatch,      \r\n Arrs.autoid as DocumentDId,      \r\n isnull(Arrs.sotype,0) as DemandPlanType,isnull(sodid,'') as DemandPlanDId,      \r\n isnull(Arrs.cFree1,N'') as cfree1,      \r\n isnull(Arrs.cFree2,N'') as cfree2,isnull(Arrs.cFree3,N'') as cfree3,isnull(Arrs.cFree4,N'') as cfree4,      \r\n isnull(Arrs.cFree5,N'') as cfree5,isnull(Arrs.cFree6,N'') as cfree6,isnull(Arrs.cFree7,N'') as cfree7,      \r\n isnull(Arrs.cFree8,N'') as cfree8,isnull(Arrs.cFree9,N'') as cfree9,isnull(Arrs.cFree10,N'') as cfree10,      \r\n Arrs.dpdate as dMDate,Arrs.dVDate,Arrs.cmassunit as imassunit,Arrs.imassdate as imassday,arrs.iexpiratdatecalcu,arrs.cexpirationdate,arrs.dexpirationdate      \r\n from pu_arrivalvouch Arr inner join      \r\n (select id,cbcloser,iQuantity,iNum,frefusequantity,frefuseNum,cWhCode,cBatch,cInvCode,autoid,sotype,sodid,dpdate,dVDate,cmassunit,imassdate,cFree1,cFree2,cFree3,cFree4,cFree5,cFree6,cFree7,cFree8,cFree9,cFree10,iexpiratdatecalcu,cexpirationdate,dexpirationdate,      \r\n (    \r\n   isnull(arrsori.iquantity,0) - isnull(arrsori.fvalidinquan,0) - isnull(arrsori.finvalidinquan,0) - isnull(QmArrCheckSrv.fauditbreakqty,0)       \r\n ) as TmpQty,      \r\n (    \r\n   isnull(arrsori.inum,0) - isnull(arrsori.fvalidinnum,0) - isnull(arrsori.finvalidinnum,0) - isnull(QmArrCheckSrv.fauditbreaknum,0)       \r\n ) as TmpNum from  pu_arrivalvouchs arrsori \r\nleft join QmArrCheckSrv on QmArrCheckSrv.sourceautoid=arrsori.autoid\r\n) Arrs on Arr.id=Arrs.id inner join Inventory Inv on Inv.cInvCode=Arrs.cInvCode    \r\n\r\n where ((isnull(Arr.iBillType,0)=0 or isnull(Arr.iBillType,0)=1)       \r\n  and isnull(Arrs.cbcloser,N'')=N''       \r\n  and isnull(Arrs.cWhCode,N'')<>N''       \r\n  and (isnull(Inv.bInvBatch,0)=0 or (isnull(Inv.bInvBatch,0)=1 and isnull(Arrs.cBatch,N'')<>N''))  )","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"pu_v_preparestockbyarrforst"},{"field":"Type","value":"View"}],"columns":[{"id":"column-259718","object_id":"column-259718","name":"igrouptype","name_without_path":"igrouptype","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259719","object_id":"column-259719","name":"Subject","name_without_path":"Subject","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259720","object_id":"column-259720","name":"DocumentId","name_without_path":"DocumentId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259721","object_id":"column-259721","name":"DocumentType","name_without_path":"DocumentType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259722","object_id":"column-259722","name":"cBusType","name_without_path":"cBusType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259723","object_id":"column-259723","name":"cSource","name_without_path":"cSource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259724","object_id":"column-259724","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259725","object_id":"column-259725","name":"cVMIVenCode","name_without_path":"cVMIVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259726","object_id":"column-259726","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259727","object_id":"column-259727","name":"iNum","name_without_path":"iNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259728","object_id":"column-259728","name":"iBillQuantity","name_without_path":"iBillQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259729","object_id":"column-259729","name":"iBillNum","name_without_path":"iBillNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259730","object_id":"column-259730","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259731","object_id":"column-259731","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259732","object_id":"column-259732","name":"ItemId","name_without_path":"ItemId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259733","object_id":"column-259733","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259734","object_id":"column-259734","name":"DocumentDId","name_without_path":"DocumentDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259735","object_id":"column-259735","name":"DemandPlanType","name_without_path":"DemandPlanType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259736","object_id":"column-259736","name":"DemandPlanDId","name_without_path":"DemandPlanDId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259737","object_id":"column-259737","name":"cfree1","name_without_path":"cfree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259738","object_id":"column-259738","name":"cfree2","name_without_path":"cfree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259739","object_id":"column-259739","name":"cfree3","name_without_path":"cfree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259740","object_id":"column-259740","name":"cfree4","name_without_path":"cfree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259753","object_id":"column-259753","name":"cfree5","name_without_path":"cfree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259741","object_id":"column-259741","name":"cfree6","name_without_path":"cfree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259742","object_id":"column-259742","name":"cfree7","name_without_path":"cfree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259743","object_id":"column-259743","name":"cfree8","name_without_path":"cfree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259744","object_id":"column-259744","name":"cfree9","name_without_path":"cfree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259745","object_id":"column-259745","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259746","object_id":"column-259746","name":"dMDate","name_without_path":"dMDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259747","object_id":"column-259747","name":"dVDate","name_without_path":"dVDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259748","object_id":"column-259748","name":"imassunit","name_without_path":"imassunit","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259749","object_id":"column-259749","name":"imassday","name_without_path":"imassday","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259750","object_id":"column-259750","name":"iexpiratdatecalcu","name_without_path":"iexpiratdatecalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259751","object_id":"column-259751","name":"cexpirationdate","name_without_path":"cexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259752","object_id":"column-259752","name":"dexpirationdate","name_without_path":"dexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};