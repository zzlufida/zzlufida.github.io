window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12085","name":"Qm_v_GetCheckQtyforMo","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view Qm_v_GetCheckQtyforMo    \r\nas    \r\nselect mom_orderdetail.modid,isnull(fbcheckqty,0) as fbcheckqty,isnull(fincheckqty,0) as fincheckqty,isnull(fbinqty,0) as fbinqty,(isnull(fbcheckjqty,0)+isnull(fbrejectjqty,0)) as fbrejectqty,isnull(brejectqty,0) as brejectqty,fvalidqty    \r\n    \r\nfrom mom_orderdetail    \r\nleft join     \r\n(    \r\nselect sourceautoid,sum(isnull(FREGQUANTITY,0)+isnull(FCONQUANTIY,0)) as fvalidqty From QMCHECKVOUCHERVIEW    \r\nwhere cvouchtype='qm04'     \r\ngroup by sourceautoid    \r\n) gg    \r\non mom_orderdetail.modid=gg.sourceautoid    \r\nleft join     \r\n    \r\n(    \r\nselect sourceautoid,sum(isnull(fquantity,0)-isnull(fsumcheckqty,0)) as fbcheckqty From qminspectvouchers    \r\ninner join qminspectvoucher on qminspectvoucher.id=qminspectvouchers.id    \r\nwhere cvouchtype='qm02' and isnull(bflag,0)=0 and isnull(cbyproduct,0)=0    \r\ngroup by sourceautoid) aa    \r\non mom_orderdetail.modid=aa.sourceautoid    \r\nleft join     \r\n(    \r\nselect sourceautoid,sum(isnull(fquantity,0)) as fincheckqty From qmcheckvoucherview    \r\nwhere cvouchtype='qm04' and isnull(cverifier,'')='' and isnull(cbyproduct,0)=0    \r\ngroup by sourceautoid    \r\n) bb    \r\non mom_orderdetail.modid=bb.sourceautoid    \r\nleft join     \r\n(    \r\nselect sourceautoid,sum(isnull(FREGQUANTITY,0)+isnull(FCONQUANTIY,0)-isnull(fsumquantity,0)) as fbinqty From   QMCHECKVOUCHERVIEW   --QMCHECKVOUCHER jinzh1  \r\nwhere cvouchtype='qm04' and isnull(cverifier,'')<>'' and isnull(cbyproduct,0)=0       \r\ngroup by sourceautoid    \r\n) cc    \r\non mom_orderdetail.modid=cc.sourceautoid    \r\nleft join     \r\n(    \r\nselect sourceautoid,sum(isnull(FDISQUANTITY,0)) as fbcheckjqty From QMCHECKVOUCHERVIEW    \r\nwhere cvouchtype='qm04' and isnull(cverifier,'')<>'' and isnull(brejflag,0)=0 and isnull(cbyproduct,0)=0    \r\ngroup by sourceautoid    \r\n) dd    \r\non mom_orderdetail.modid=dd.sourceautoid    \r\nleft join     \r\n(    \r\nselect sourceautoid,sum(isnull(fsumquantity,0)) as fbrejectjqty From qmrejectvoucher    \r\nwhere cvouchtype='qm06' and isnull(cverifier,'')='' and isnull(cbyproduct,0)=0     \r\ngroup by sourceautoid    \r\n) ee    \r\non mom_orderdetail.modid=ee.sourceautoid    \r\nleft join     \r\n(    \r\nselect sourceautoid,sum(isnull(fquantity,0)-isnull(fsumreworkqty,0)) as brejectqty From qmrejectvouchers    \r\ninner join qmrejectvoucher on qmrejectvoucher.id=qmrejectvouchers.id    \r\nwhere cvouchtype='qm06' and isnull(bflag,0)=0 and isnull(cverifier,'')<>'' and isnull(cbyproduct,0)=0    \r\nand isnull(fquantity,0)-isnull(fsumreworkqty,0)>0    \r\n    \r\nand idisposeflow in (1,2,3,4,7)    \r\ngroup by sourceautoid    \r\n) ff    \r\non mom_orderdetail.modid=ff.sourceautoid    \r\nwhere isnull(QcFlag,0)=1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Qm_v_GetCheckQtyforMo"},{"field":"Type","value":"View"}],"columns":[{"id":"column-278375","object_id":"column-278375","name":"modid","name_without_path":"modid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278376","object_id":"column-278376","name":"fbcheckqty","name_without_path":"fbcheckqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278377","object_id":"column-278377","name":"fincheckqty","name_without_path":"fincheckqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278378","object_id":"column-278378","name":"fbinqty","name_without_path":"fbinqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278379","object_id":"column-278379","name":"fbrejectqty","name_without_path":"fbrejectqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278380","object_id":"column-278380","name":"brejectqty","name_without_path":"brejectqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278381","object_id":"column-278381","name":"fvalidqty","name_without_path":"fvalidqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};