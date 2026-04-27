import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            Text("vb013-line1")
                .font(.title2)
                .bold()
            Text("vb013-line2")
                .font(.body)
            Text("vb013-line3")
                .font(.body)
        }
        .padding(25)
        .background(Color(white: 0.98))
    }
}
