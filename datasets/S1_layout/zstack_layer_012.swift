import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(16)
                .frame(width: 132, height: 72)
            VStack(spacing: 4) {
                Text("zl012-back")
                    .font(.caption)
                Text("zl012-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
