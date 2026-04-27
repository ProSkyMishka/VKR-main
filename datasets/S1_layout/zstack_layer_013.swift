import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color.gray
                .opacity(0.2)
                .cornerRadius(17)
                .frame(width: 133, height: 73)
            VStack(spacing: 4) {
                Text("zl013-back")
                    .font(.caption)
                Text("zl013-front")
                    .font(.headline)
                    .bold()
            }
        }
        .padding()
    }
}
