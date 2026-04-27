import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("cb010-title")
                .font(.title)
                .bold()
            Text("cb010-subtitle")
                .font(.subheadline)
                .foregroundColor(.secondary)
            Divider()
            Text("cb010-body content")
                .font(.body)
                .lineLimit(3)
            HStack {
                Spacer()
                Text("cb010-action")
                    .font(.callout)
                    .padding(.horizontal, 12)
                    .padding(.vertical, 6)
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
        .padding(16)
        .background(Color(white: 0.97))
        .cornerRadius(12)
    }
}
