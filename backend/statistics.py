from re import compile
from emoji import UNICODE_EMOJI


class StatsComputation:
    users = []

    msg_count = {}
    word_count = {}
    used_words = {}
    used_emojis = {}
    emoji_count = {}
    msg_per_hour = {
        i: 0
        for i in range(0, 24)
    }
    msg_per_week_day = {
        i: 0
        for i in range(0, 7)
    }

    def aggregate_message(self, message):
        msg_words = [word for word in compile(r'[ |\s]*').split(message['message']) if
                     word not in ['', '<Multimedia', 'omitido>']]
        emojis_in_message = ''.join(ch for ch in message['message'] if ch in UNICODE_EMOJI)

        # msg_count and word_count
        if message['user'] in self.users:
            self.msg_count[message['user']] += 1
            self.word_count[message['user']] += len(msg_words)
            self.emoji_count[message['user']] += len(emojis_in_message)
        else:
            self.users.append(message['user'])

            self.msg_count[message['user']] = 1
            self.word_count[message['user']] = len(msg_words)
            self.emoji_count[message['user']] = len(emojis_in_message)

        # used_words
        for word in msg_words:
            if word in self.used_words.keys():
                self.used_words[word] += 1
            else:
                self.used_words[word] = 1

        # used_emojis and emoji_count
        for emoji in emojis_in_message:
            if emoji in self.used_emojis.keys():
                self.used_emojis[emoji] += 1
            else:
                self.used_emojis[emoji] = 1

        # msg_per_hour and msg_per_week_day
        self.msg_per_hour[message['timestamp'].hour] += 1
        self.msg_per_week_day[message['timestamp'].weekday()] += 1

    def get_statistics(self):
        ordered_words = sorted(self.used_words, key=self.used_words.get, reverse=True)
        ordered_emojis = sorted(self.used_emojis, key=self.used_emojis.get, reverse=True)

        return {
            'msg_count': self.msg_count,
            'word_count': self.word_count,
            'most_used_word': ordered_words[0] if ordered_words else None,
            'most_used_emoji': ordered_emojis[0] if ordered_emojis else None,
            'emoji_count': self.emoji_count,
            'msg_per_hour': self.msg_per_hour,
            'msg_per_week_day': self.msg_per_week_day
        }
