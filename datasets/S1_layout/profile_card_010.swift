import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 10) {
            Image(systemName: "person.crop.circle.fill")
                .font(.system(size: 72))
                .foregroundColor(.blue)
            VStack(spacing: 2) {
                Text("pc010-name")
                    .font(.title2)
                    .bold()
                Text("pc010-handle")
                    .font(.caption)
                    .foregroundColor(.gray)
            }
            Text("pc010-bio short")
                .font(.subheadline)
                .multilineTextAlignment(.center)
                .padding(.horizontal)
            HStack(spacing: 24) {
                VStack { Text("pc010-posts"); Text("\(20)").bold() }
                VStack { Text("pc010-followers"); Text("\(110)").bold() }
                VStack { Text("pc010-likes"); Text("\(1010)").bold() }
            }
        }
        .padding()
    }
}
