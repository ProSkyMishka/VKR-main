import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            Text("vb014-line1")
                .font(.title2)
                .bold()
            Text("vb014-line2")
                .font(.body)
            Text("vb014-line3")
                .font(.body)
            Text("vb014-line4")
                .font(.body)
        }
        .padding(26)
        .background(Color(white: 0.92))
    }
}
