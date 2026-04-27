import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(11)
                .frame(width: 127, height: 67)
            VStack(spacing: 4) {
                Text("zl007-back")
                    .font(.caption)
                Text("zl007-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
