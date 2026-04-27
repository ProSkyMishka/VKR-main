import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Text("hb004-headline")
                    .font(.title)
                    .bold()
                Spacer()
                Text("hb004-tagline")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            .padding()
            .background(Color(white: 0.96))
            VStack(alignment: .leading, spacing: 8) {
                Text("hb004-content paragraph")
                    .font(.body)
                Text("hb004-extra")
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
            .padding()
            HStack {
                Spacer()
                Text("hb004-footer")
                    .font(.footnote)
                    .foregroundColor(.gray)
                Spacer()
            }
            .padding(.bottom, 8)
        }
    }
}
