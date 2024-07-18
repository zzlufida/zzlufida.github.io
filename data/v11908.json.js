window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11908","name":"pu_v_preparestockbyarrnocheck","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view pu_v_preparestockbyarrnocheck    \r\nas    \r\nselect     \r\n N'0101' as Subject,    \r\n Arr.id as DocumentId,    \r\n N'56' as DocumentType,    \r\n Arr.cBusType,N'' as cSource,Arr.ddate,    \r\n (case isnull(cbustype,N'') when N'代管采购' then isnull(Arr.cVenCode,N'') else N'' end) as cVMIVenCode,    \r\n (case isnull(Arr.iBillType,0)     \r\n  when 0 then    \r\n   (case when Arrs.TmpQty - isnull(Arrs.frefusequantity,0) > 0 then Arrs.TmpQty - isnull(Arrs.frefusequantity,0) else 0 end)    \r\n  when 1 then    \r\n   (case when Arrs.TmpQty < 0 then Arrs.TmpQty else 0 end)    \r\n end) as iQuantity,    \r\n (case isnull(Arr.iBillType,0)     \r\n  when 0 then    \r\n   (case when Arrs.TmpNum - isnull(Arrs.frefuseNum,0) > 0 then Arrs.TmpNum - isnull(Arrs.frefuseNum,0) else 0 end)    \r\n  when 1 then    \r\n   (case when Arrs.TmpNum < 0 then Arrs.TmpNum else 0 end)    \r\n end) as iNum,    \r\n isnull(Arrs.iQuantity,0) as iBillQuantity,    \r\n isnull(Arrs.iNum,0) as iBillNum,    \r\n Arrs.cWhCode,Arrs.cInvCode,0 as ItemId,    \r\n isnull(Arrs.cBatch,N'') as cBatch,    \r\n Arrs.autoid as DocumentDId,    \r\n isnull(Arrs.sotype,0) as DemandPlanType,isnull(sodid,'') as DemandPlanDId,    \r\n isnull(Arrs.cFree1,N'') as cfree1,    \r\n isnull(Arrs.cFree2,N'') as cfree2,isnull(Arrs.cFree3,N'') as cfree3,isnull(Arrs.cFree4,N'') as cfree4,    \r\n isnull(Arrs.cFree5,N'') as cfree5,isnull(Arrs.cFree6,N'') as cfree6,isnull(Arrs.cFree7,N'') as cfree7,    \r\n isnull(Arrs.cFree8,N'') as cfree8,isnull(Arrs.cFree9,N'') as cfree9,isnull(Arrs.cFree10,N'') as cfree10,    \r\n Arrs.dpdate as dMDate,Arrs.dVDate,Arrs.cmassunit as imassunit,Arrs.imassdate as imassday,arrs.iexpiratdatecalcu,arrs.cexpirationdate,arrs.dexpirationdate    \r\n from pu_arrivalvouch Arr inner join    \r\n (select id,cbcloser,iQuantity,iNum,frefusequantity,frefuseNum,cWhCode,cBatch,cInvCode,autoid,sotype,sodid,dpdate,dVDate,cmassunit,imassdate,cFree1,cFree2,cFree3,cFree4,cFree5,cFree6,cFree7,cFree8,cFree9,cFree10,iexpiratdatecalcu,cexpirationdate,dexpirationdate,    \r\n (  \r\n   isnull(arrsori.iquantity,0) - isnull(arrsori.fvalidinquan,0) - isnull(arrsori.fdegradeinquantity,0) - isnull(arrsori.finvalidinquan,0) - isnull(arrsori.fdtquantity,0)     \r\n ) as TmpQty,    \r\n (  \r\n   isnull(arrsori.inum,0) - isnull(arrsori.fvalidinnum,0) - isnull(arrsori.fdegradeinnum,0) - isnull(arrsori.finvalidinnum,0) - isnull(arrsori.fdtquantity,0)     \r\n ) as TmpNum from  pu_arrivalvouchs arrsori ) Arrs on Arr.id=Arrs.id inner join Inventory Inv on Inv.cInvCode=Arrs.cInvCode    \r\n where (isnull(Arr.iBillType,0)=0 or isnull(Arr.iBillType,0)=1)     \r\n  and isnull(Arrs.cbcloser,N'')=N''     \r\n  and isnull(Arrs.cWhCode,N'')<>N''     \r\n  and (isnull(Inv.bInvBatch,0)=0 or (isnull(Inv.bInvBatch,0)=1 and isnull(Arrs.cBatch,N'')<>N''))","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"pu_v_preparestockbyarrnocheck"},{"field":"Type","value":"View"}],"columns":[{"id":"column-259754","object_id":"column-259754","name":"Subject","name_without_path":"Subject","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259755","object_id":"column-259755","name":"DocumentId","name_without_path":"DocumentId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259756","object_id":"column-259756","name":"DocumentType","name_without_path":"DocumentType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259757","object_id":"column-259757","name":"cBusType","name_without_path":"cBusType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259758","object_id":"column-259758","name":"cSource","name_without_path":"cSource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259759","object_id":"column-259759","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259760","object_id":"column-259760","name":"cVMIVenCode","name_without_path":"cVMIVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259761","object_id":"column-259761","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"25, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259762","object_id":"column-259762","name":"iNum","name_without_path":"iNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"33, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259763","object_id":"column-259763","name":"iBillQuantity","name_without_path":"iBillQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259764","object_id":"column-259764","name":"iBillNum","name_without_path":"iBillNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259765","object_id":"column-259765","name":"cWhCode","name_without_path":"cWhCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259788","object_id":"column-259788","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259766","object_id":"column-259766","name":"ItemId","name_without_path":"ItemId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259767","object_id":"column-259767","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259768","object_id":"column-259768","name":"DocumentDId","name_without_path":"DocumentDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259769","object_id":"column-259769","name":"DemandPlanType","name_without_path":"DemandPlanType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259770","object_id":"column-259770","name":"DemandPlanDId","name_without_path":"DemandPlanDId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259771","object_id":"column-259771","name":"cfree1","name_without_path":"cfree1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259772","object_id":"column-259772","name":"cfree2","name_without_path":"cfree2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259773","object_id":"column-259773","name":"cfree3","name_without_path":"cfree3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259774","object_id":"column-259774","name":"cfree4","name_without_path":"cfree4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259775","object_id":"column-259775","name":"cfree5","name_without_path":"cfree5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259776","object_id":"column-259776","name":"cfree6","name_without_path":"cfree6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259777","object_id":"column-259777","name":"cfree7","name_without_path":"cfree7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259778","object_id":"column-259778","name":"cfree8","name_without_path":"cfree8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259779","object_id":"column-259779","name":"cfree9","name_without_path":"cfree9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259780","object_id":"column-259780","name":"cfree10","name_without_path":"cfree10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259781","object_id":"column-259781","name":"dMDate","name_without_path":"dMDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259782","object_id":"column-259782","name":"dVDate","name_without_path":"dVDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259783","object_id":"column-259783","name":"imassunit","name_without_path":"imassunit","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259784","object_id":"column-259784","name":"imassday","name_without_path":"imassday","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259785","object_id":"column-259785","name":"iexpiratdatecalcu","name_without_path":"iexpiratdatecalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259786","object_id":"column-259786","name":"cexpirationdate","name_without_path":"cexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-259787","object_id":"column-259787","name":"dexpirationdate","name_without_path":"dexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};