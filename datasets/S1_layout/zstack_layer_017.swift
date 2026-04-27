import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(5)
                .frame(width: 137, height: 77)
            VStack(spacing: 4) {
                Text("zl017-back")
                    .font(.caption)
                Text("zl017-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
