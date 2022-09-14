import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';

admin.initializeApp(functions.config().firebase);
const allowCors = cors({ origin: true });

export const getSkills = functions.https.onRequest((req, res) => {
  allowCors(req, res, () => {
    const db = admin.firestore();
    db.collection('/skills')
      .get()
      .then((snapshot) => {
        const arr = [];
        snapshot.forEach((skill) => {
          const obj = {
            ...skill.data(),
          };
          arr.push(obj);
        });
        res.send(arr);
        return '';
      })
      .catch((err) => res.send(err));
  });
});

export const getLanguages = functions.https.onRequest((req, res) => {
  allowCors(req, res, () => {
    const db = admin.firestore();
    db.collection('/languages')
      .get()
      .then((snapshot) => {
        const arr = [];
        snapshot.forEach((lang) => {
          const obj = {
            ...lang.data(),
          };
          arr.push(obj);
        });
        res.send(arr);
        return '';
      })
      .catch((err) => res.send(err));
  });
});

export const getJobs = functions.https.onRequest((req, res) => {
  allowCors(req, res, () => {
    const db = admin.firestore();
    db.collection('/job-history')
      .get()
      .then((snapshot) => {
        const arr = [];
        snapshot.forEach(async (job) => {
          const obj = job.data();
          arr.push(obj);
        });
        res.send(arr);
        return '';
      })
      .catch((err) => res.send(err));
  });
});
