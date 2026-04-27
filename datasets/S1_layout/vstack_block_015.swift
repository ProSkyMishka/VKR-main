import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 7) {
            Text("vb015-line1")
                .font(.title2)
                .bold()
            Text("vb015-line2")
                .font(.body)
            Text("vb015-line3")
                .font(.body)
            Text("vb015-line4")
                .font(.body)
            Text("vb015-line5")
                .font(.body)
        }
        .padding(27)
        .background(Color(white: 0.93))
    }
}
