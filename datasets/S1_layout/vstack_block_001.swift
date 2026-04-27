import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            Text("vb001-line1")
                .font(.title2)
                .bold()
            Text("vb001-line2")
                .font(.body)
            Text("vb001-line3")
                .font(.body)
            Text("vb001-line4")
                .font(.body)
        }
        .padding(13)
        .background(Color(white: 0.93))
    }
}
